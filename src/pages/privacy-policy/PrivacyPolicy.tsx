import { useTranslation } from "react-i18next";

import { LegalPage } from "@/components/sections/legal/LegalPage";

export const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return <LegalPage prefix="privacy" sections={8} seoTitle={t("seo.privacyTitle")} seoDescription={t("seo.privacyDescription")} />;
};
