import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import styles from './PrivacyPolicy.module.css'

export const PrivacyPolicy = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.privacyTitle')}</title>
        <meta name="description" content={t('seo.privacyDescription')} />
        <link rel="canonical" href="https://zumiasolutions.xyz/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://zumiasolutions.xyz/" />
        <link rel="alternate" hrefLang="es" href="https://zumiasolutions.xyz/" />
        <link rel="alternate" hrefLang="x-default" href="https://zumiasolutions.xyz/" />
      </Helmet>

      <main>
        <h1 className={styles.jaja}>{t('footer.privacy')}</h1>
      </main>
    </>
  );
};