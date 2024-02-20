import { Filter, Products } from "../../features";
import styles from "./Catalog.module.scss";

export const Catalog = () => {
  return (
    <div
      className={styles.container}
      id="Catalog"
    >
      <h4 className={styles.title}>Catalog</h4>
      <div className={styles.wrapper}>
        <Filter />
        <Products />
      </div>
    </div>
  );
};
