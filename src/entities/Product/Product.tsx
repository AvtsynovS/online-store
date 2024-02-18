import { NavLink } from "react-router-dom";
import styles from "./Product.module.scss";

interface IProduct {
  title: string;
  img?: string;
  price?: number;
  checkbox?: boolean;
  isProductPage?: boolean;
}

export const Product = ({
  title,
  checkbox,
  price,
  img,
  isProductPage,
}: IProduct) => {
  const classNames = require("classnames");

  // TODO Вместо 1 передать id продукта
  return (
    <NavLink to="/1">
      <div className={styles.container}>
        {img && (
          <img
            src={img}
            alt="product"
            className={classNames(
              styles.productImg,
              isProductPage && styles.widthProduct
            )}
          />
        )}

        {checkbox && (
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="titleProduct"
              name="titleProduct"
              className={styles.checkbox}
            />
            <label
              className={styles.title}
              htmlFor="titleProduct"
            >
              {title}
            </label>
          </div>
        )}
        {!checkbox && <p className={styles.title}>{title}</p>}
        {price && <p className={styles.price}>{price} $ </p>}
      </div>
    </NavLink>
  );
};
