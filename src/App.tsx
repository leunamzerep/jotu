import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Header } from "./header/Header";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/services/Services";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { Contact } from "./pages/contact/Contact";
import { TermsAndConditions } from "./pages/terms/TermsAndConditions";
import { PrivacyPolicy } from "./pages/privacyPolicy/PrivacyPolicy";

import { PageTransition } from "./components/PageTransition";

import "./assets/css/app.css";
import { Footer } from "./footer/Footer";

export const App = () => {

  const AnimatedRoutes = () => {

    const location = useLocation();

    return (
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    )
  }

  return (
    <section className="appContainer">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </section>
  );
};
