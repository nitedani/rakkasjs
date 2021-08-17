import type { BaseRouterInfo } from "./Router";
import { createContext, useContext } from "react";
import { initClientGlobal } from "../init-global";

// Make the context persist between hot reloads
export const BaseRouterContext = initClientGlobal(
	"RouterContext",
	createContext<BaseRouterInfo>({
		current: new URL("https://example.com"),
	}),
);

/** Custom hook for tracking navigation status */
export function useBaseRouter(): BaseRouterInfo {
	return useContext(BaseRouterContext);
}