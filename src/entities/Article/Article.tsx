import articlePhoto from "../../assets/bg-photo.svg";
import bgPattern from "../../assets/bg-pattern.svg";
import styles from "./Article.module.scss";

export const Article = () => {
  return (
    <div className={styles.container}>
      <img
        src={bgPattern}
        alt="bgPattern"
        className={styles.bgPattern}
      />
      <div className={styles.article}>
        <h4 className={styles.title}>About us</h4>
        <p className={styles.paragraph}>
          Every day a person has a choice what to spend his money on. Stores and
          websites offer an endless list of products.
        </p>
        <p className={styles.paragraph}>
          But we will help you make the right choice!
        </p>
        <div className={styles.wrapper}>
          <p className={styles.hyphen}></p>
          <h3 className={styles.signature}>Goods4you</h3>
        </div>
      </div>
      <img
        src={articlePhoto}
        alt="articlePhoto"
        className={styles.articlePhoto}
      />
    </div>
  );
};
