import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { isPrerender } from "@/app/prerender";

import en from "./en.json";
import es from "./es.json";

export type Lang = "en" | "es";

/**
 * Idioma de la web (misma URL, sin rutas /en):
 * - El HTML prerenderizado siempre va en inglés (idioma principal).
 * - En el navegador: si la persona eligió un idioma con el switch, se usa ese
 *   (localStorage "jotu-lang"); si no, el idioma del navegador (es, es-MX,
 *   es-419… cuentan como español); si no es inglés ni español, inglés.
 * La detección ocurre aquí, antes del primer render (i18next con recursos en
 * línea inicia de forma síncrona), así que React pinta directamente en el
 * idioma correcto.
 */
export const STORAGE_KEY = "jotu-lang";

/** Guarda la elección del switch. Solo el switch escribe en jotu-lang. */
export const saveLang = (lang: Lang) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Navegador sin almacenamiento (modo privado, bloqueado): el idioma cambia igual en esta visita
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    // Durante el prerender se fuerza inglés (con lng fijo el detector no se usa)
    lng: isPrerender() ? "en" : undefined,
    fallbackLng: "en",
    // Solo en y es: "es-419" o "es-MX" se resuelven como "es" (ver getBestMatchFromCodes de i18next)
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: STORAGE_KEY,
      // No guarda nada automáticamente: solo el switch escribe en jotu-lang
      caches: [],
    },
  });

// <html lang> sigue al idioma visible (lectores de pantalla, traductores, Google)
const setHtmlLang = (lng: string) => {
  if (typeof document !== "undefined") document.documentElement.lang = lng;
};
setHtmlLang(i18n.resolvedLanguage ?? "en");
i18n.on("languageChanged", () => setHtmlLang(i18n.resolvedLanguage ?? "en"));

export default i18n;
