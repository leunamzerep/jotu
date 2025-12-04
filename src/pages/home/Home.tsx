import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.homeTitle')}</title>
        <meta name="description" content={t('seo.homeDescription')} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
        <h1>{t('header.home')}</h1>
      </main>
    </>
  );
};