import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { createRequire } from "node:module";
import { prerenderRoutes } from "./src/prerender-routes";

const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender");

// https://vite.dev/config/ 
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: prerenderRoutes,
    }),
  ],
  build: {
    manifest: true,
  },
});
