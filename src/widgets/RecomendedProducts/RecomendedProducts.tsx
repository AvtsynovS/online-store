import { useCategoriesQuery } from "../../app";
import { Button } from "../../shared";
import styles from "./RecomendedProducts.module.scss";

// TODO Переделать верстку
export const RecomendedProducts = () => {
  const { isError, data: categories } = useCategoriesQuery();

  return (
    <div
      className={styles.container}
      id="Product selection"
    >
      <div className={styles.wrapperContent}>
        <h4 className={styles.title}>
          We will select the perfect product for you
        </h4>
        <p className={styles.subTitle}>
          Answer three questions and we will send you a catalog with the most
          suitable products for you.
        </p>

        <div className={styles.wrapper}>
          <p className={styles.question}>
            What type of product are you considering?
          </p>
          {isError && <div>Somting went wrong...</div>}
          <div className={styles.productsWrapper}>
            {categories &&
              categories.map((category, i) => {
                return (
                  <div
                    className={styles.categoriesWrapper}
                    key={category + i}
                  >
                    <input
                      type="checkbox"
                      name="titleProduct"
                      className={styles.checkbox}
                    />
                    <label
                      className={styles.label}
                      htmlFor="titleProduct"
                    >
                      {category}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.pagination}>
          <div>1 of 2</div>
          <Button
            title="Next step"
            type="ghost"
            isBorder
            handlerClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
