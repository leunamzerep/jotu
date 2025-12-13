import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from './ContactFrom.module.css'

type form = { canAnimate: boolean }

export const ContactForm = ({ canAnimate }: form) => {

  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [canAnimate]);

  return (
    <section className={`${styles.displayContainer} ${animate ? styles.appear : ''}`}>
      <form action="" className={styles.formContainer}>
        <h2 className={styles.invitation}>{t('contact.invitation')}</h2>
        <label htmlFor="name">
          <p className={styles.labelText}>{t('contact.label1')}</p>
          <p className={styles.labelWarn}>{t('contact.warn')}</p>
        </label>
        <input id="name" name='name' autoComplete="name" type="text" placeholder={t('contact.place1')} />
        <label htmlFor="mail">
          <p className={styles.labelText}>{t('contact.label2')}</p>
          <p className={styles.labelWarn}>{t('contact.warn')}</p>
        </label>
        <input id="mail" type="mail" autoComplete="mail" placeholder={t('contact.place2')} />
        <label htmlFor="mesagge">
          <p className={styles.labelText}>{t('contact.label3')}</p>
          <p className={styles.labelWarn}>{t('contact.warn')}</p>
        </label>
        <textarea id="mesagge" name="message" autoComplete="off" className={styles.msgContainer} placeholder={t('contact.place3')} />
        <button className={styles.send}>{t('contact.send')}</button>
      </form>
    </section>
  )
}