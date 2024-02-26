import { NavLink } from "react-router-dom";
import styles from "./Product.module.scss";

interface IProduct {
  id: number;
  title: string;
  img?: string;
  price?: number;
  checkbox?: boolean;
  isProductPage?: boolean;
}

export const Product = ({
  id,
  title,
  checkbox,
  price,
  img,
  isProductPage,
}: IProduct) => {
  const classNames = require("classnames");

  return (
    <NavLink
      to={`/${id}`}
      className={styles.link}
    >
      <div className={styles.container}>
        {img && (
          <img
            src={img}
            alt="product"
            className={classNames(
              styles.productImg,
              isProductPage && styles.widthProduct,
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
        <div className={styles.productInfo}>
          {title}
          {price && <p className={styles.price}>{price} $ </p>}
        </div>
      </div>
    </NavLink>
  );
};
