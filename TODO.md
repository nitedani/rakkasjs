# TODO

## For 0.2.0
- [x] Fix React context mismatch bugs in HMR
- [x] Implement HMR for pages and layouts
- [x] Implement the `create-rakkas-app` package
	- [x] Make `create-rakkas-app` work even when the raw mode is not available
	- [x] Warn when directory not empty
- [x] Make `useReload` refetch on window focus (if requested)
- [x] Add config options to trust forwarded host name
- [x] Implement more robust body parsing
  - [x] Parse urlencoded request bodies
- [x] Improve performance and package size
  - [x] Remove md5 dependency
  - [x] Move bundled dependencies to devDependencies
  - [x] Migrate to esbuild
- [x] Fix 404 handling for non-page paths
- [x] Fix CSS handling when JavaScript is disabled
- [ ] Update website
  - [x] Launch rakkasjs.org
  - [x] Update documentation
  - [x] Add open graph preview
- [ ] Add command to unpublish all canary releases

## For 1.0.0
- Features
  - [ ] Static site generation
  - [ ] Add a way to add cache-related HTTP headers on pages
  - [ ] Service workers
  - [ ] Link prefetching
  - [ ] HTTPS in dev server
  - [ ] Spread dynamic route parameters
  - [ ] Localizable and customizable router
  - [ ] Serverless platforms
  - [ ] Data caching
  	- [ ] Optimistic updates
  	- [ ] Stale while revalidate strategy
- Chores
  - [ ] Set up Cypress
    - [ ] for Rakkas itself
    - [ ] for demo templates
  - [ ] Contribution guidelines
  - [ ] Send PR to `awesome-react`
  - [ ] Create integration examples with popular tools
    - [ ] Redux
    - [ ] Apollo
    - [ ] Styled components
    - [ ] Tailwind CSS
  - [x] Investigate Vite fs.allow warning: https://vitejs.dev/config/#server-fs-allow
  - [ ] Investigate the circular dependency warning