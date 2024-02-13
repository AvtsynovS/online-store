import product from "../../assets/photos/product-2.jpg";
import { Product } from "../../entities";
import { Button } from "../../shared";
import styles from "./RecomendedProducts.module.scss";

const products = Array(6).fill(
  <Product
    title="sneakers"
    img={product}
    checkbox={true}
  />
);

export const RecomendedProducts = () => {
  return (
    <div className={styles.container}>
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
            {products.map((product) => {
              return product;
            })}
          </div>
        </div>
        <div className={styles.pagination}>
          <div>1 of 3</div>
          <Button
            title="Next step"
            type="ghost"
            isBorder
          />
        </div>
      </div>
    </div>
  );
};
