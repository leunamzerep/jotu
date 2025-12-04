import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import styles from './Home.module.css'

export const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.homeTitle')}</title>
        <meta name="description" content={t('seo.homeDescription')} />
        <link rel="canonical" href="https://jotusolutions.net" />
      </Helmet>

      <main className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <img src="src/assets/img/mainImg.jpg" className={styles.mainImg} />
          <h1 className={styles.mainTitle}>{t('home.main')}</h1>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.item}>
            <img src="src/assets/img/home1.webp" className={styles.home1} />
            <div className={styles.textContainer}>
              <h2 className={styles.itemTitle}>{t('home.title1')}</h2>
              <h3 className={styles.itemText}>{t('home.text1')}</h3>
            </div>
          </div>
          <div className={styles.item}>
            <img src="src/assets/img/home2.jpg" className={styles.home2} />
            <div className={styles.textContainer}>
              <h2 className={styles.itemTitle}>{t('home.title2')}</h2>
              <h3 className={styles.itemText}>{t('home.text2')}</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};