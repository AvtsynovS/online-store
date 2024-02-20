import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
