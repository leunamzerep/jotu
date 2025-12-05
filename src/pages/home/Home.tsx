import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import mainImg from "../../assets/img/mainImg.jpg";
import home1 from "../../assets/img/home1.webp";
import home2 from "../../assets/img/home2.jpg";

import styles from "./Home.module.css";

export const Home = () => {
  const { t } = useTranslation();

  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const elements = itemsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;

          if (entry.isIntersecting) {
            el.classList.add(styles.inView);
            // If you only want the animation once:
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.3, // 30% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("seo.homeTitle")}</title>
        <meta name="description" content={t("seo.homeDescription")} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <img src={mainImg} className={styles.mainImg} />
          <h1 className={styles.mainTitle}>{t("home.main")}</h1>
        </div>

        <div className={styles.infoContainer}>
          <div ref={(el) => { itemsRef.current[0] = el }}
            className={`${styles.item} ${styles.fromLeft}`}>
            <img src={home1} className={styles.home1} />
            <div className={styles.textContainer1}>
              <h2 className={styles.itemTitle}>{t("home.title1")}</h2>
              <h3 className={styles.itemText}>{t("home.text1")}</h3>
            </div>
          </div>
          <div ref={(el) => { itemsRef.current[1] = el }}
            className={`${styles.item} ${styles.fromRight}`} >
            <div className={styles.textContainer2}>
              <h2 className={styles.itemTitle}>{t("home.title2")}</h2>
              <h3 className={styles.itemText}>{t("home.text2")}</h3>
            </div>
            <img src={home2} className={styles.home2} />
          </div>
          <div ref={(el) => { itemsRef.current[2] = el }}
            className={`${styles.item} ${styles.fromLeft}`}>
            <img src={home1} className={styles.home1} />
            <div className={styles.textContainer1}>
              <h2 className={styles.itemTitle}>{t("home.title1")}</h2>
              <h3 className={styles.itemText}>{t("home.text1")}</h3>
            </div>
          </div>
          <div ref={(el) => { itemsRef.current[4] = el }}
            className={`${styles.item} ${styles.fromRight}`} >
            <div className={styles.textContainer2}>
              <h2 className={styles.itemTitle}>{t("home.title2")}</h2>
              <h3 className={styles.itemText}>{t("home.text2")}</h3>
            </div>
            <img src={home2} className={styles.home2} />
          </div>
        </div>
      </main>
    </>
  );
};
