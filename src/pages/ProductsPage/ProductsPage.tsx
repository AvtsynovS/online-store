import product from "../../assets/photos/product-1.jpg";

import styles from "./ProductsPage.module.scss";
import { Products, Search } from "../../features";
import { Product } from "../../entities";

// TODO Переделать isProductPage через useLocation?
const products = Array(9).fill(
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
    isProductPage
  />
);

interface IProductsPage {
  title: string;
}

export const ProductsPage = ({ title }: IProductsPage) => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Search />
      <div className={styles.wrapper}>
        <Products products={products} />
      </div>
    </main>
  );
};
