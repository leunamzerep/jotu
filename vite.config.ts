import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePrerender from "vite-plugin-prerender";
import path from "node:path";
import { prerenderRoutes } from "./src/prerender-routes";

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
