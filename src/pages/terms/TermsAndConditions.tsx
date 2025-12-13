import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import styles from './TermsAndConditions.module.css'

export const TermsAndConditions = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.termsTitle')}</title>
        <meta name="description" content={t('seo.termsDescription')} />
        <link rel="canonical" href="https://zumiasolutions.xyz/terms-and-conditions" />
        <link rel="alternate" hrefLang="en" href="https://zumiasolutions.xyz/" />
        <link rel="alternate" hrefLang="es" href="https://zumiasolutions.xyz/" />
        <link rel="alternate" hrefLang="x-default" href="https://zumiasolutions.xyz/" />
      </Helmet>

      <main>
        <h1 className={styles.jaja}>{t('footer.terms')}</h1>
      </main>
    </>
  );
};