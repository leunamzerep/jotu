// Enlaces internos del sitio en un solo lugar.
// Hoy van SIN barra final, igual que la web publicada. CLAUDE.md fija que
// pasarán a llevar barra final (/about-us/); eso se hace en la Sesión B (SEO),
// junto con el canonical y el sitemap. Las rutas de react-router
// (src/app/routes.tsx) no dependen de este archivo.

export const PATHS = {
  home: "/",
  aboutUs: "/about-us",
  contact: "/contact",
  terms: "/terms-and-conditions",
  privacy: "/privacy-policy",
} as const;
