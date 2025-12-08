import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { SeoEntry } from "../../components/seoEntry/SeoEntry";
import { ContactCard } from "../../components/contactCard/ContactCard";

import aboutImg from "../../assets/img/aboutImg.jpg"
import styles from './AboutUs.module.css'

type AboutProps = {
  canAnimate: boolean;
}

export const AboutUs = ({ canAnimate }: AboutProps) => {

  const { t } = useTranslation();
  const h1 = t("about.main")

  return (
    <>
      <Helmet>
        <title>{t('seo.aboutUsTitle')}</title>
        <meta name="description" content={t('seo.aboutUsDescription')} />
        <link rel="canonical" href="https://zumiasolutions.xyz/about-us" />
      </Helmet>

      <main>
        <SeoEntry imgPath={aboutImg} content={h1} canAnimate={canAnimate} />
        <h1 className={styles.p}>{t('header.aboutUs')}</h1>
        <ContactCard />
      </main>
    </>
  );
};