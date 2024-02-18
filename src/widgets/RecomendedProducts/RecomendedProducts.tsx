import { Button } from "../../shared";
import styles from "./RecomendedProducts.module.scss";

const categories = Array(22).fill("sneakers");

// TODO Посмотреть отображение после запроса
export const RecomendedProducts = () => {
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
          <div className={styles.productsWrapper}>
            {categories.map((category) => {
              return (
                <div className={styles.categoriesWrapper}>
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
