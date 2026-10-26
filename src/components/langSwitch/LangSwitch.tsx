import { useTranslation } from "react-i18next";

import { saveLang } from "@/i18n/config";
import { cx } from "@/components/ui/cx";

/**
 * Switch de idioma ES | EN. Es un solo botón: el idioma actual se ve resaltado
 * y el lector de pantalla anuncia "Idioma actual: español. Cambiar a inglés"
 * (a11y.langSwitch, en el idioma visible).
 */
export const LanguageSwitch = ({ className }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage !== "es";

  // Guarda la elección (jotu-lang) para que se respete al recargar
  const handleToggle = () => {
    const newLang = isEnglish ? "es" : "en";
    saveLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const option = (active: boolean) =>
    cx(
      "rounded-full px-2.5 py-1 transition-colors duration-200",
      active ? "bg-jotu-navy-950 text-jotu-white" : "text-jotu-ink-muted group-hover:text-jotu-navy-950",
    );

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={t("a11y.langSwitch")}
      className={cx(
        "group inline-flex items-center gap-0.5 rounded-full border border-jotu-line bg-jotu-white p-1 text-xs font-bold tracking-wider",
        className,
      )}
    >
      <span aria-hidden="true" lang="es" className={option(!isEnglish)}>ES</span>
      <span aria-hidden="true" lang="en" className={option(isEnglish)}>EN</span>
    </button>
  );
};
