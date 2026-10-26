import { useTranslation } from "react-i18next";

import { saveLang } from "@/i18n/config";
import './LangSwitch.css'

export const LanguageSwitch = () => {

  const { i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage !== "es";

  // Guarda la elección (jotu-lang) para que se respete al recargar
  const handleToggle = () => {
    const newLang = isEnglish ? "es" : "en";
    saveLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <label className="lang-switch">
      <span className={`lang-label ${!isEnglish ? "lang-label--active" : ""}`}>
        ES
      </span>
      <div className="lang-switch_control">
        <input type="checkbox" checked={isEnglish} onChange={handleToggle} />
        <span className="lang-switch_slider" />
      </div>
      <span className={`lang-label ${isEnglish ? "lang-label--active" : ""}`}>
        EN
      </span>
    </label>
  );
};
