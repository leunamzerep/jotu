import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { SplashScreen } from "./components/splashScreen/SplashScreen";
import { createServerRoutes } from "./routes.ssr";

import "./assets/css/app.css";

const Layout = () => (
  <>
    <Header />
    <AnimatePresence mode="wait">
      <Outlet />
    </AnimatePresence>
    <Footer />
  </>
);

export const App = () => {
  const [canAnimate, setCanAnimate] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          element: (
            <>
              {showSplash && (
                <SplashScreen
                  onReady={() => setCanAnimate(true)}
                  onFinish={() => setShowSplash(false)}
                />
              )}
              <Layout />
            </>
          ),
          children: createServerRoutes(canAnimate),
        },
      ]),
    [canAnimate, showSplash]
  );

  return <RouterProvider router={router} />;
};
