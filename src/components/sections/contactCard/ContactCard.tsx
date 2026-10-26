import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/config/site";
import { PATHS } from "@/config/paths";
import contactImg from "@/assets/img/contactImg.jpg";
import styles from "./ContactCard.module.css"

export const ContactCard = () => {

  const { t } = useTranslation();
  const mailLink: string = t('footer.mailRedirect')

  return (
    <section className={styles.container}>
      <img src={contactImg} className={styles.contactImg} />
      <div className={styles.wrapper}>
        <div className={styles.redirects}>
          <p className={styles.title}>{t("card.schedule")}</p>
          <a className={styles.item} href={WHATSAPP_URL}>{PHONE_DISPLAY}</a>
          <a className={styles.item} href={mailLink}>{EMAIL}</a>
        </div>
        <Link to={PATHS.contact} className={styles.button}>{t("card.contactUs")}</Link>
      </div>
    </section>
  )
}