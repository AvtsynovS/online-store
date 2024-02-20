import { Products, Search } from "../../features";

import styles from "./ProductsPage.module.scss";

interface IProductsPage {
  title: string;
}

export const ProductsPage = ({ title }: IProductsPage) => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Search />
      <div className={styles.wrapper}>
        <Products />
      </div>
    </main>
  );
};
