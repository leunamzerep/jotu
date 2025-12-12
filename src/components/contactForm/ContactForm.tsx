import { useTranslation } from "react-i18next";

import styles from './ContactFrom.module.css'

export const ContactForm = () => {

  const { t } = useTranslation();

  return (
    <section className={styles.displayContainer}>
      <form action="" className={styles.formContainer}>
        <h2 className={styles.invitation}>{t('contact.invitation')}</h2>
        <label htmlFor="">
          <p className={styles.labelText}>{t('contact.label1')}</p>
          <p className={styles.labelWarn}>{t('contact.warn')}</p>
        </label>
        <input type="text" placeholder={t('contact.place1')} />
        <label htmlFor="">
          <p className={styles.labelText}>{t('contact.label2')}</p>
          <p className={styles.labelWarn}>{t('contact.warn')}</p>
        </label>
        <input type="text" placeholder={t('contact.place2')} />
        <label htmlFor="">
          <p className={styles.labelText}>{t('contact.label3')}</p>
          <p className={styles.labelWarn}>{t('contact.warn')}</p>
        </label>
        <input type="text" placeholder={t('contact.place3')} />
      </form>
    </section>
  )
}