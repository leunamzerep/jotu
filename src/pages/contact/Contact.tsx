import { useTranslation, Trans } from "react-i18next";
import { PageSeo } from "@/components/seo/PageSeo";
import { ContactForm } from "@/components/forms/contactForm/ContactForm";
import { SeoEntry } from "@/components/sections/seoEntry/SeoEntry";
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/config/site";

import mainImg from "@/assets/img/contactMainImg.jpg";
import styles from './Contact.module.css'

export const Contact = () => {

  const { t } = useTranslation();
  const h1 = t('contact.main')

  return (
    <>
      <PageSeo title={t("seo.contactTitle")} description={t("seo.contactDescription")} />

      <main>
        <div className={styles.main} data-reveal>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
          <div className={styles.info}>
            <h2>{t('contact.ubih23')}</h2>
            <h3>{t('contact.ubih33')}</h3>
            <h2>{t('contact.ubih21')}</h2>
            <h3>{t('contact.ubih31')}</h3>
            <h2>{t('contact.ubih22')}</h2>
            <h3>{t('contact.ubih32')}</h3>
            <h2>{t('contact.ubih24')}</h2>
            <h3 className={styles.inlineText}>
              <Trans
                i18nKey="contact.ubih34"
                components={{
                  1: (
                    <a
                      className={styles.inlineLink}
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noreferrer"
                    />
                  ),
                }}
              />
            </h3>
          </div>
        </div>
        <div className={styles.mapContainer} data-reveal>
          <iframe
            title="Office location"
            src={MAPS_EMBED_URL}
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{ border: 0, borderRadius: "22px" }}
          />
        </div>
        <SeoEntry imgPath={mainImg} content={h1} />
      </main>
    </>
  );
};