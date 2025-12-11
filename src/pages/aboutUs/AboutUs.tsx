import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { SeoEntry } from "../../components/seoEntry/SeoEntry";
import { ContactCard } from "../../components/contactCard/ContactCard";


import aboutImg from "../../assets/img/aboutImg.jpg"
import about1 from "../../assets/img/about1.jpg";
import about2 from "../../assets/img/about2.jpg";
import styles from './AboutUs.module.css'

type AboutProps = {
  canAnimate: boolean;
}

export const AboutUs = ({ canAnimate }: AboutProps) => {

  const { t } = useTranslation();
  const h1 = t("about.h1")

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [canAnimate]);

  return (
    <>
      <Helmet>
        <title>{t('seo.aboutUsTitle')}</title>
        <meta name="description" content={t('seo.aboutUsDescription')} />
        <link rel="canonical" href="https://zumiasolutions.xyz/about-us" />
      </Helmet>

      <main>
        <SeoEntry imgPath={aboutImg} content={h1} canAnimate={canAnimate} />
        <div>
          <div className={`${styles.header} ${animate ? styles.appear : ""}`}>
            <h2 className={styles.mainTitle}>{t('about.h21')}</h2>
            <h3 className={styles.mainText}>{t('about.h31')}</h3>
          </div>
          <div className={styles.infoContainer}>
            <div className={`${styles.item} ${animate ? styles.enter : ""}`} >
              <div className={styles.titleContainer}>
                <h2 className={styles.itemTitle}>{t("about.h22")}</h2>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.itemText}>{t("about.h32")}</h3>
                <img src={about1} className={styles.about1} />
              </div>
            </div>
            <div className={`${styles.item} ${animate ? styles.enter : ""}`} >
              <div className={styles.textContainer}>
                <h3 className={styles.itemText}>{t("about.h33")}</h3>
                <img src={about2} className={styles.about2} />
              </div>
              <div className={styles.titleContainer}>
                <h2 className={styles.itemTitle}>{t("about.h23")}</h2>
              </div>
            </div>
            <div className={`${styles.item} ${animate ? styles.enter : ""}`} >
              <div className={styles.titleContainer}>
                <h2 className={styles.itemTitle}>{t("about.h22")}</h2>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.itemText}>{t("about.h32")}</h3>
                <img src={about1} className={styles.about1} />
              </div>
            </div>
            <div className={`${styles.item} ${animate ? styles.enter : ""}`} >
              <div className={styles.textContainer}>
                <h3 className={styles.itemText}>{t("about.h33")}</h3>
                <img src={about2} className={styles.about2} />
              </div>
              <div className={styles.titleContainer}>
                <h2 className={styles.itemTitle}>{t("about.h23")}</h2>
              </div>
            </div>
          </div>
        </div>
        <ContactCard />
      </main>
    </>
  );
};