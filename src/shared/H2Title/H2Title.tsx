import styles from "./H2Title.module.scss";

interface IH2Title {
  title: string;
}

export const H2Title = ({ title }: IH2Title) => {
  return <h2 className={styles.title}>{title}</h2>;
};
