import { ReactNode } from "react";
import styles from "./Products.module.scss";
import { Button } from "../../shared";

interface IProducts {
  products: ReactNode[];
}

export const Products = ({ products }: IProducts) => {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return product;
      })}
      <div className={styles.buttonWrapper}>
        <Button
          type="accent"
          title="Show more"
        />
      </div>
    </div>
  );
};
