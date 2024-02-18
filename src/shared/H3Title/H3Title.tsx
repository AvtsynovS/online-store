import styles from "./H3Title.module.scss";

interface IH2Title {
  title: string;
}

export const H3Title = ({ title }: IH2Title) => {
  return <h3 className={styles.title}>{title}</h3>;
};
