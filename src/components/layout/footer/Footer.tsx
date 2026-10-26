import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { FACEBOOK_URL, INSTAGRAM_URL } from "@/config/site";
import { useWhatsappUrl } from "@/config/whatsapp";
import { PATHS } from "@/config/paths";
import { FacebookIcon, InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import logo from "@/assets/img/JoTu_icono_color.png";
import styles from './Footer.module.css'

export const Footer = () => {

  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();
  const mailLink: string = t('footer.mailRedirect')

  const [buttonBottom, setButtonBottom] = useState(30);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();

      if (cardRect.top > window.innerHeight) {
        setButtonBottom(30);
        return;
      }

      if (cardRect.top <= window.innerHeight) {
        const distanceFromBottom = window.innerHeight - cardRect.top;
        const deviceDistance = window.innerWidth > 767 ? 30 : 115;
        setButtonBottom(distanceFromBottom + deviceDistance);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <section>
      <div ref={cardRef} className={styles.footer}>
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
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappFloat} style={{ bottom: `${buttonBottom}px` }} aria-label={t("a11y.whatsapp")}>
        <WhatsAppIcon className="size-[1em]" />
      </a>
    </section>
  )
}