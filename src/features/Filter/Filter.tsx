import { useEffect, useState } from "react";
import { Button } from "../../shared";
import styles from "./Filter.module.scss";
import {
  useActions,
  useCategoriesQuery,
  useLazyGetProductsOfCategoryQuery,
} from "../../app";

export const Filter = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const { changeFilterProducts, removeFilterProducts } = useActions();
  const [fetchFilter, { data }] = useLazyGetProductsOfCategoryQuery();
  const { isError, data: categories } = useCategoriesQuery();

  const setFilter = (category: string) => {
    fetchFilter(category);
  };

  const removeFilter = () => removeFilterProducts();

  useEffect(() => {
    if (data) {
      changeFilterProducts(data);
    }
  }, [data, changeFilterProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {/* TODO подумть как убрать перенос */}
        Selection <br /> by parameters
      </div>
      <div>
        <h4 className={styles.subTitle}>Category</h4>
        {isError && <div>Somting went wrong...</div>}
        <ul className={styles.filterList}>
          {categories &&
            categories.map((item, index) => {
              return (
                <li
                  className={styles.filterItem}
                  key={index}
                  onClick={() => setCategoryFilter(item)}
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
            handlerClick={() => setFilter(categoryFilter)}
          />
          <Button
            type="ghost"
            title="Reset"
            handlerClick={removeFilter}
          />
        </div>
      </div>
    </div>
  );
};
