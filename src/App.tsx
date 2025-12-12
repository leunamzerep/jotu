import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Header } from "./header/Header";
import { Home } from "./pages/home/Home";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { Contact } from "./pages/contact/Contact";
import { TermsAndConditions } from "./pages/terms/TermsAndConditions";
import { PrivacyPolicy } from "./pages/privacyPolicy/PrivacyPolicy";
import { PageTransition } from "./components/PageTransition";
import { Footer } from "./footer/Footer";
import { SplashScreen } from "./components/splashScreen/SplashScreen";

import "./assets/css/app.css";

type AppProps = {
  canAnimate: boolean;
}

const AnimatedRoutes = ({ canAnimate }: AppProps) => {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home canAnimate={canAnimate} /></PageTransition>} />
        <Route path="/about-us" element={<PageTransition><AboutUs canAnimate={canAnimate} /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact canAnimate={canAnimate} /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export const App = () => {
  const [canAnimate, setCanAnimate] = useState(false);
  const [showSplash, setShowSplash] = useState(true);


  return (
    <section className="appContainer">
      <BrowserRouter>
        {showSplash && (<SplashScreen
          onReady={() => setCanAnimate(true)}
          onFinish={() => setShowSplash(false)}
        />
        )}
        <Header />
        <AnimatedRoutes canAnimate={canAnimate} />
        <Footer />
      </BrowserRouter>
    </section>
  );
};
