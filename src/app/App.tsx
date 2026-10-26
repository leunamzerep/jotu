import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

import { PrerenderReady } from "./PrerenderReady";

import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { useReveal } from "@/components/layout/useReveal";
import { PageTransition } from "@/components/layout/PageTransition";
import { NotFound } from "@/pages/not-found/NotFound";
import { createServerRoutes } from "./routes.ssr";

import "@/styles/global.css";

const Layout = () => {
  // Animación de entrada al hacer scroll (solo una mejora: sin JS todo se ve)
  useReveal();

  // Si se llegó desde public/404.html, index.html ocultó la página para que no
  // se viera Inicio un instante; ya montada la ruta correcta, se muestra.
  useEffect(() => {
    document.documentElement.classList.remove("spa-redirect");
  }, []);

  return (
    <>
      <Header />
      {/* Destino del enlace "Saltar al contenido" del Header */}
      <div id="contenido" tabIndex={-1} className="flex-1 outline-none">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

// Sin pantalla de carga (splash): el HTML prerenderizado ya muestra la página
// real desde el primer momento.
const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />
        <PrerenderReady />
      </>
    ),
    children: [
      ...createServerRoutes(),
      // Cualquier otra URL: página 404 propia
      {
        path: "*",
        element: (
          <PageTransition>
            <NotFound />
          </PageTransition>
        ),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
