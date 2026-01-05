import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PrerenderReady() {
  const location = useLocation();

  useEffect(() => {
    document.dispatchEvent(new Event("prerender:ready"));
  }, [location.pathname]);

  return null;
}
