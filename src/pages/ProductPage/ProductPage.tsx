import product from "../../assets/photos/product-3.jpg";
import { H2Title, H3Title, ProductCharacteristic } from "../../shared";

import styles from "./ProductPage.module.scss";

// interface IProductPage {
//   title: string;
// }

// TODO Получить товар с бэка и распарсить данные
export const ProductPage = () => {
  return (
    <main className={styles.container}>
      <H2Title title="Product 5" />
      <div className={styles.wrapper}>
        <div className={styles.galery}>
          <img
            src={product}
            alt="product"
          />
          <div className={styles.miniPhotos}>
            <img
              src={product}
              alt="mini product"
              className={styles.miniPhoto}
            />
            <img
              src={product}
              alt="mini product"
              className={styles.miniPhoto}
            />
            <img
              src={product}
              alt="mini product"
              className={styles.miniPhoto}
            />
            <img
              src={product}
              alt="mini product"
              className={styles.miniPhoto}
            />
            <img
              src={product}
              alt="mini product"
              className={styles.miniPhoto}
            />
            <img
              src={product}
              alt="mini product"
              className={styles.miniPhoto}
            />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionTitle}>
            <H3Title title="Puma Force 1 Shadow" />
            <ProductCharacteristic
              charName="SKU ID"
              charValue="0005"
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <ProductCharacteristic
              charName="Rating"
              charValue="star"
            />
            <ProductCharacteristic
              charName="Base price"
              charValue="500$"
            />
            <ProductCharacteristic
              charName="Discount percentage"
              charValue="10%"
            />
            <ProductCharacteristic
              charName="Discount price"
              charValue="450$"
            />
            <ProductCharacteristic
              charName="Stock"
              charValue="13"
            />
            <ProductCharacteristic
              charName="Brand"
              charValue="Puma"
            />
            <ProductCharacteristic
              charName="Category"
              charValue="Smartphones"
            />
            <ProductCharacteristic
              charName="Description"
              charValue="An apple mobile which is nothing like apple"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
