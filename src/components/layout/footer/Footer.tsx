import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { FACEBOOK_URL, INSTAGRAM_URL } from "@/config/site";
import { PATHS } from "@/config/paths";
import { FacebookIcon, InstagramIcon, MailIcon } from "@/components/ui/icons";
import logo from "@/assets/img/JoTu_icono_color.png";
import styles from './Footer.module.css'

export const Footer = () => {

  const { t } = useTranslation();
  const mailLink: string = t('footer.mailRedirect')

  return (
    <section>
      <div className={styles.footer}>
        <div className={styles.optionsContainer}>
          <span className={styles.legalsTitle}>
            {t("footer.legals")}
          </span>
          <Link to={PATHS.terms} className={styles.option}>
            {t("footer.terms")}
          </Link>
          <Link to={PATHS.privacy} className={styles.option}>
            {t("footer.privacy")}
          </Link>
        </div>
        <img src={logo} className={styles.logo} alt={t("alt.logo")} />
        <div className={styles.socialContainer}>
          <div className={styles.medias}>
            <a className={styles.media} style={{ backgroundColor: '#fea501' }} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.instagram")}>
              <InstagramIcon className="size-[1em]" />
            </a>
            <a className={styles.media} style={{ backgroundColor: '#1970ff' }} href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.facebook")}>
              <FacebookIcon className="size-[1em]" />
            </a>
            <a className={styles.media} style={{ backgroundColor: '#e23f33' }} href={mailLink} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.email")}>
              <MailIcon className="size-[1em]" />
            </a>
          </div>
          <p className={styles.legalAdvice}>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </section>
  )
}