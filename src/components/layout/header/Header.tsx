import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "@/components/langSwitch/LangSwitch";
import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import logo from "@/assets/img/JoTu_color_1.png";
import styles from './Header.module.css'

export const Header = () => {

  const { t } = useTranslation();

  return (
    <section>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt={t("alt.logo")} />
        <div className={styles.optionsContainer}>
          <Link to={PATHS.home} className={styles.option}>{t('header.home')}</Link>
          <Link to={PATHS.aboutUs} className={styles.option}>{t('header.aboutUs')}</Link>
          <Link to={PATHS.contact} className={styles.option}>{t('header.contact')}</Link>
        </div>
        <LanguageSwitch />
      </div>
    </section>
  )
}