import { createServer } from "http";
import sirv from "sirv";
import { installNodeFetch } from "./install-node-fetch";
import { handleNodeRequest } from "./handle-node-request";
import { apiRoutes, pageRoutes, manifest, htmlTemplate } from "./manifests";
import type { handleRequest as HandleRequest } from "rakkasjs/dist/server";
import fs from "fs";
import path from "path";

const SERVER = "./server.js";

async function startServer() {
	installNodeFetch();

	const fileServer = sirv("dist/client", { etag: true, maxAge: 0 });

	const trustForwardedOrigin = !!process.env.TRUST_FORWARDED_ORIGIN || false;
	const host = process.env.HOST || "localhost";
	const port = process.env.PORT || 3000;

	const app = createServer((req, res) => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const handleRequest = require(SERVER).handleRequest as typeof HandleRequest;

		async function handle() {
			await handleNodeRequest({
				htmlTemplate,

				apiRoutes,
				pageRoutes,

				manifest,

				req,
				res,

				trustForwardedOrigin,

				handleRequest,
				async writeFile(name, content) {
					const fullname = path.resolve(__dirname, "..", name);
					const dir = path.parse(fullname).dir;

					await fs.promises.mkdir(dir, { recursive: true });
					await fs.promises.writeFile(
						path.resolve(__dirname, "..", name),
						content,
					);
				},
			}).catch((error) => {
				// TODO: logging
				// eslint-disable-next-line no-console
				console.error(error);
				res.statusCode = 500;
				res.end("Server error");
			});
		}

		if (req.url === "/") {
			handle();
		} else {
			fileServer(req, res, handle);
		}
	});

	app.listen({ port, host }, () => {
		if (process.argv.every((x) => x !== "-q" && x !== "--quiet")) {
			// TODO: logging
			// eslint-disable-next-line no-console
			console.log(`Rakkas app listening on http://${host}:${port}`);
		}
	});
}

startServer();
