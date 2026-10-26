import { AnimatePresence } from "framer-motion";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

import { PrerenderReady } from "./PrerenderReady";

import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { useReveal } from "@/components/layout/useReveal";
import { createServerRoutes } from "./routes.ssr";

import "@/styles/global.css";

const Layout = () => {
  // Animación de entrada al hacer scroll (solo una mejora: sin JS todo se ve)
  useReveal();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
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
    children: createServerRoutes(),
  },
]);

export const App = () => <RouterProvider router={router} />;
