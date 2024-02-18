import { Button } from "../../shared";
import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        placeholder="Search by title"
        className={styles.inputSearch}
      />
      <Button
        title="Search"
        type="accent"
        handlerClick={() => {}}
      />
    </div>
  );
};
