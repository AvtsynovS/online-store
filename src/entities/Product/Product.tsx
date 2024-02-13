import styles from "./Product.module.scss";

interface IProduct {
  title: string;
  price?: number;
  checkbox?: boolean;
  img: string;
}

export const Product = ({ title, checkbox, price, img }: IProduct) => {
  return (
    <div className={styles.container}>
      <img
        src={img}
        alt="product"
        className={styles.productImg}
      />
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
  );
};
