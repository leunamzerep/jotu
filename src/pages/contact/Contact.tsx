import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const Contact = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.contactTitle')}</title>
        <meta name="description" content={t('seo.contactDescription')} />
        <link rel="canonical" href="https://zumiasolutions.xyz/contact" />
      </Helmet>

      <main>
        <h1>{t('header.contact')}</h1>
      </main>
    </>
  );
};