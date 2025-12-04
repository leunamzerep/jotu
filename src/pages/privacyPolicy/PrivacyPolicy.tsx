import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const PrivacyPolicy = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.privacyTitle')}</title>
        <meta name="description" content={t('seo.privacyDescription')} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main>
        <h1>{t('footer.privacy')}</h1>
      </main>
    </>
  );
};