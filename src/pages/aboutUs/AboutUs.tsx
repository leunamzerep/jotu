import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const AboutUs = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.aboutUsTitle')}</title>
        <meta name="description" content={t('seo.aboutUsDescription')} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main>
        <h1>{t('header.aboutUs')}</h1>
      </main>
    </>
  );
};