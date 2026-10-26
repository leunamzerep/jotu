import { PATHS } from "@/config/paths";

/** Enlaces del menú principal (Header y menú móvil), con barra final. */
export const NAV_LINKS = [
  { to: PATHS.home, labelKey: "header.home" },
  { to: PATHS.aboutUs, labelKey: "header.aboutUs" },
  { to: PATHS.contact, labelKey: "header.contact" },
] as const;

/** ¿El enlace es la página actual? Acepta la ruta con o sin barra final. */
export const isCurrentPath = (pathname: string, to: string) => {
  const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  return clean(pathname) === clean(to);
};
