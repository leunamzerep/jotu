import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const Services = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.servicesTitle')}</title>
        <meta name="description" content={t('seo.servicesDescription')} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
        <h1>{t('header.services')}</h1>
      </main>
    </>
  );
};