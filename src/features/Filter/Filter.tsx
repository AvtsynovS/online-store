import { Button } from "../../shared";
import styles from "./Filter.module.scss";

interface IFilter {
  filterItems: string[];
}

export const Filter = ({ filterItems }: IFilter) => {
  return (
    <div className={styles.container}>
      <div className={styles.question}>
        {/* TODO подумть как убрать перенос */}
        Selection <br /> by parameters
      </div>
      <div>
        <h4 className={styles.subTitle}>Category</h4>
        <form action="">
          <ul className={styles.filterList}>
            {filterItems.map((item, index) => {
              return (
                <li
                  className={styles.filterItem}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className={styles.buttonWrapper}>
            <Button
              type="secondary"
              title="Apply"
              handlerClick={() => {}}
            />
            <Button
              type="ghost"
              title="Reset"
              handlerClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
