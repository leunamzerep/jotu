import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import es from "./es.json";

const isPrerender =
    typeof window !== "undefined" &&
    (window as any).__PRERENDER_INJECTED?.prerender === true;

const chain = isPrerender ? i18n : i18n.use(LanguageDetector);

chain.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        es: { translation: es },
    },
    lng: isPrerender ? "es" : undefined,
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    detection: isPrerender
        ? undefined
        : {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
}).then(() => {
    const lang = i18n.resolvedLanguage || i18n.language || "es";
    document.documentElement.lang = lang;
});

i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng || "es";
});

export default i18n;
