// import logo from "../../assets/hero-bg.jpg";
// import { Button } from "../../shared";
import product from "../../assets/photos/product-1.jpg";

import { Product } from "../../entities";
import { Filter, Products } from "../../features";
import styles from "./Catalog.module.scss";

const filterItems = [
  "smartphones",
  "laptops",
  "sneakers",
  "sneakers",
  "sneakers",
  "sneakers",
  "sneakers",
  "sneakers",
];

const products = [
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
  <Product
    title="Nike Air Force 1 '07 QS"
    img={product}
    price={110}
  />,
];

export const Catalog = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Catalog</h4>
      <div className={styles.wrapper}>
        <Filter filterItems={filterItems} />
        <Products products={products} />
      </div>
    </div>
  );
};