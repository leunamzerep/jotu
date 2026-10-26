import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import { prerenderRoutes } from "./src/app/prerender-routes";

export default defineConfig({
  base: "/",
  resolve: {
    // Alias @/ → src/ (ruta absoluta, como pide la documentación de Vite)
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    react(),
    // Tailwind 4 (guía oficial "Installing with Vite"); el CSS entra por src/styles/global.css
    tailwindcss(),
    prerender({
      routes: prerenderRoutes,
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        renderAfterDocumentEvent: "prerender:ready",
        // Marca la página como prerender (window.__PRERENDER_INJECTED): así no
        // se oculta nada para animar y el idioma del HTML estático es fijo
        inject: { prerender: true },
      },
    }),
  ],
  build: {
    manifest: true,
    outDir: "dist",
  },
});
