import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import styles from './TermsAndConditions.module.css'
import { SeoEntry } from "@/components/sections/seoEntry/SeoEntry";
import aboutImg from "@/assets/img/aboutImg.jpg"

export const TermsAndConditions = () => {

  const { t } = useTranslation();
  const h1 = t('terms.h1')

  return (
    <>
      <Helmet defer={false}>
        <title>{t('seo.termsTitle')}</title>
        <meta name="description" content={t('seo.termsDescription')} />
        <link rel="canonical" href="https://jotusolutions.net/terms-and-conditions" />
        <link rel="alternate" hrefLang="es" href="https://jotusolutions.net/" />
        <link rel="alternate" hrefLang="x-default" href="https://jotusolutions.net/" />
      </Helmet>

      <main>
        <SeoEntry imgPath={aboutImg} content={h1} />
        <div className={styles.main}>
          <h2>{t('terms.section1')}</h2>
          <p>{t('terms.p1')}</p>
          <h2>{t('terms.section2')}</h2>
          <p>{t('terms.p2')}</p>
          <h2>{t('terms.section3')}</h2>
          <p>{t('terms.p3')}</p>
          <h2>{t('terms.section4')}</h2>
          <p>{t('terms.p4')}</p>
          <h2>{t('terms.section5')}</h2>
          <p>{t('terms.p5')}</p>
          <h2>{t('terms.section6')}</h2>
          <p>{t('terms.p6')}</p>
          <h2>{t('terms.section7')}</h2>
          <p>{t('terms.p7')}</p>
          <h2>{t('terms.section8')}</h2>
          <p>{t('terms.p8')}</p>
          <h2>{t('terms.section9')}</h2>
          <p>{t('terms.p9')}</p>
        </div>
      </main>
    </>
  );
};