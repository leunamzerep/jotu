import "./i18n/config";

import { StrictMode } from 'react'
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from 'react-dom/client'
import { App } from "./App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)