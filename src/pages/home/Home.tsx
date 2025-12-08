import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import { ContactCard } from "../../components/contactCard/ContactCard";

import mainImg from "../../assets/img/mainImg.jpg";
import home1 from "../../assets/img/home1.webp";
import home2 from "../../assets/img/home2.jpg";

import styles from "./Home.module.css";
import { SeoEntry } from "../../components/seoEntry/SeoEntry";

type HomeProps = { canAnimate: boolean };

export const Home = ({ canAnimate }: HomeProps) => {

  const { t } = useTranslation();
  const h1 = t("home.main")
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [canAnimate]);

  return (
    <>
      <Helmet>
        <title>{t("seo.homeTitle")}</title>
        <meta name="description" content={t("seo.homeDescription")} />
        <link rel="canonical" href="https://zumiasolutions.xyz" />
      </Helmet>

      <main className={styles.mainContainer}>
        <SeoEntry imgPath={mainImg} content={h1} canAnimate={canAnimate} />
        <div className={styles.infoContainer}>
          <div className={`${styles.item} ${animate ? styles.enter : ""}`}>
            <img src={home1} className={styles.home1} />
            <div className={styles.textContainer1}>
              <h2 className={styles.itemTitle}>{t("home.title1")}</h2>
              <h3 className={styles.itemText}>{t("home.text1")}</h3>
            </div>
          </div>
          <div className={`${styles.item} ${animate ? styles.enter : ""}`} >
            <div className={styles.textContainer2}>
              <h2 className={styles.itemTitle}>{t("home.title2")}</h2>
              <h3 className={styles.itemText}>{t("home.text2")}</h3>
            </div>
            <img src={home2} className={styles.home2} />
          </div>
          <div className={`${styles.item} ${animate ? styles.enter : ""}`}>
            <img src={home1} className={styles.home1} />
            <div className={styles.textContainer1}>
              <h2 className={styles.itemTitle}>{t("home.title1")}</h2>
              <h3 className={styles.itemText}>{t("home.text1")}</h3>
            </div>
          </div>
          <div className={`${styles.item} ${animate ? styles.enter : ""}`}>
            <div className={styles.textContainer2}>
              <h2 className={styles.itemTitle}>{t("home.title2")}</h2>
              <h3 className={styles.itemText}>{t("home.text2")}</h3>
            </div>
            <img src={home2} className={styles.home2} />
          </div>
        </div>
        <ContactCard />
      </main>
    </>
  );
};
