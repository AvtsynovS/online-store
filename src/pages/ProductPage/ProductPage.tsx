import { H2Title, H3Title, ProductCharacteristic } from "../../shared";
import { useParams } from "react-router-dom";

import styles from "./ProductPage.module.scss";
import { IProduct, useLazyProductQuery } from "../../app";
import { useEffect, useState } from "react";

interface ISingleProduct extends IProduct {
  discountPrice: string;
}

export const ProductPage = () => {
  let { id } = useParams();
  const [fetchProduct, { data }] = useLazyProductQuery();
  const [product, setProduct] = useState<ISingleProduct>();

  useEffect(() => {
    if (id) {
      fetchProduct(+id);
    }
  }, []);

  console.log(`product.images => ${product?.images.length}`);

  useEffect(() => {
    if (data) {
      console.log(`data => ${data.price}`);
      const discountPrice = (
        data.price -
        data.price / data.discountPercentage
      ).toFixed(2);

      setProduct({ ...data, discountPrice });
    }
  }, [data]);

  // TODO Переделать верстку
  return (
    <main className={styles.container}>
      <H2Title title="Product 5" />
      {product && (
        <div className={styles.wrapper}>
          <div className={styles.galery}>
            <img
              src={product.images[0]}
              alt="product"
            />
            <div className={styles.miniPhotos}>
              <img
                src={product.images[1]}
                alt="mini product"
                className={styles.miniPhoto}
              />
              <img
                src={product.images[2]}
                alt="mini product"
                className={styles.miniPhoto}
              />
              <img
                src={product.images[3]}
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
                charValue={`${product.price} $`}
              />
              <ProductCharacteristic
                charName="Discount percentage"
                charValue={`${product.discountPercentage} $`}
              />
              <ProductCharacteristic
                charName="Discount price"
                charValue={`${product.discountPrice} $`}
              />
              <ProductCharacteristic
                charName="Stock"
                charValue={`${product.stock}`}
              />
              <ProductCharacteristic
                charName="Brand"
                charValue={`${product.brand}`}
              />
              <ProductCharacteristic
                charName="Category"
                charValue={`${product.category}`}
              />
              <ProductCharacteristic
                charName="Description"
                charValue={`${product.description}`}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
