import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { SeoEntry } from "../../components/seoEntry/SeoEntry";

import mainImg from "../../assets/img/contactMainImg.jpg";
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
      <Helmet>
        <title>{t('seo.contactTitle')}</title>
        <meta name="description" content={t('seo.contactDescription')} />
        <link rel="canonical" href="https://zumiasolutions.xyz/contact" />
      </Helmet>

      <main>
        <SeoEntry imgPath={mainImg} content={h1} canAnimate={canAnimate} />
        <ContactForm />
        <p className={`${styles.prueba} ${animate ? styles.enter : ""}`}></p>
      </main>
    </>
  );
};