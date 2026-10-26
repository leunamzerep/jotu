import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "@/components/forms/contactForm/ContactForm";
import { SeoEntry } from "@/components/sections/seoEntry/SeoEntry";
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/config/site";

import mainImg from "@/assets/img/contactMainImg.jpg";
import styles from './Contact.module.css'

type ContactProps = { canAnimate: boolean };

export const Contact = ({ canAnimate }: ContactProps) => {

  const { t } = useTranslation();
  const h1 = t('contact.main')
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [canAnimate]);

  return (
    <>
      <Helmet defer={false}>
        <title>{t('seo.contactTitle')}</title>
        <meta name="description" content={t('seo.contactDescription')} />
        <link rel="canonical" href="https://jotusolutions.net/contact" />
        <link rel="alternate" hrefLang="es" href="https://jotusolutions.net/" />
        <link rel="alternate" hrefLang="x-default" href="https://jotusolutions.net/" />
      </Helmet>

      <main>
        <div className={`${styles.main} ${animate ? styles.appear : ''}`}>
          <div className={styles.formContainer}>
            <ContactForm canAnimate={canAnimate} />
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
        <div className={`${styles.mapContainer} ${animate ? styles.appear : ''}`}>
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
        <SeoEntry imgPath={mainImg} content={h1} canAnimate={canAnimate} />
      </main>
    </>
  );
};