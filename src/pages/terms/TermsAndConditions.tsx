import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const TermsAndConditions = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.termsTitle')}</title>
        <meta name="description" content={t('seo.termsDescription')} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main>
        <h1>{t('footer.terms')}</h1>
      </main>
    </>
  );
};