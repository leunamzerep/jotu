// Enlaces internos del sitio, siempre con barra final (/about-us/), que es la
// forma que publica GitHub Pages (about-us/index.html) y la del canonical y el
// sitemap. Sin barra, GitHub Pages responde con una redirección 301 extra.
// Las rutas de react-router (src/app/routes.tsx) siguen sin barra: el router
// acepta las dos formas.

export const PATHS = {
  home: "/",
  aboutUs: "/about-us/",
  contact: "/contact/",
  terms: "/terms-and-conditions/",
  privacy: "/privacy-policy/",
} as const;

/** Sección de la agenda de citas en Contacto (botones "Agenda tu Asesoría"). */
export const BOOKING_ID = "agenda";
export const AGENDA_PATH = `${PATHS.contact}#${BOOKING_ID}`;
