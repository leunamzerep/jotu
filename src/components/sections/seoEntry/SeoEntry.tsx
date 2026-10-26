import styles from './SeoEntry.module.css'

type SeoEntryProps = {
  imgPath: string;
  content: string;
}

export const SeoEntry = ({ imgPath, content }: SeoEntryProps) => {

  return (
    <div className={styles.titleContainer} data-reveal>
      <img src={imgPath} className={styles.mainImg} alt="" />
      <h1 className={styles.mainTitle}>{content}</h1>
    </div>
  )
}