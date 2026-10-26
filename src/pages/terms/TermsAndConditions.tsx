import { useTranslation } from "react-i18next";

import { LegalPage } from "@/components/sections/legal/LegalPage";

export const TermsAndConditions = () => {
  const { t } = useTranslation();

  return <LegalPage prefix="terms" sections={9} seoTitle={t("seo.termsTitle")} seoDescription={t("seo.termsDescription")} />;
};
