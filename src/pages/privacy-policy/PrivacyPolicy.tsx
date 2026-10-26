import { useTranslation } from "react-i18next";
import { PageSeo } from "@/components/seo/PageSeo";

import styles from './PrivacyPolicy.module.css'

import { SeoEntry } from "@/components/sections/seoEntry/SeoEntry";
import aboutImg from "@/assets/img/aboutImg.jpg"

export const PrivacyPolicy = () => {

  const { t } = useTranslation();
  const h1 = t('privacy.h1')

  return (
    <>
      <PageSeo title={t("seo.privacyTitle")} description={t("seo.privacyDescription")} />

      <main>
        <SeoEntry imgPath={aboutImg} content={h1} />
        <div className={styles.main}>
          <h2>{t('privacy.section1')}</h2>
          <p>{t('privacy.p1')}</p>
          <h2>{t('privacy.section2')}</h2>
          <p>{t('privacy.p2')}</p>
          <h2>{t('privacy.section3')}</h2>
          <p>{t('privacy.p3')}</p>
          <h2>{t('privacy.section4')}</h2>
          <p>{t('privacy.p4')}</p>
          <h2>{t('privacy.section5')}</h2>
          <p>{t('privacy.p5')}</p>
          <h2>{t('privacy.section6')}</h2>
          <p>{t('privacy.p6')}</p>
          <h2>{t('privacy.section7')}</h2>
          <p>{t('privacy.p7')}</p>
          <h2>{t('privacy.section8')}</h2>
          <p>{t('privacy.p8')}</p>
        </div>
      </main>
    </>
  );
};