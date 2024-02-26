import { Button, H2Title, H3Title, ProductCharacteristic } from "../../shared";
import { useParams } from "react-router-dom";

import styles from "./ProductPage.module.scss";
import {
  IProduct,
  useLazyProductQuery,
  useUpdateProductMutation,
} from "../../app";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  let { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [product, setProduct] = useState<IProduct>();

  const [fetchProduct, { data }] = useLazyProductQuery();
  const [updateProduct] = useUpdateProductMutation();

  const handlerClick = () => {
    setIsDisabled(!isDisabled);
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as unknown as HTMLInputElement[];
    const updateProductFromForm: any = {};

    for (const { name, value } of target) {
      if (Object.keys(updateProductFromForm).includes(name)) {
        updateProductFromForm[name] = value;
      }
    }

    updateProduct({ ...product, ...updateProductFromForm });
    setProduct({ ...product, ...updateProductFromForm });
  };

  useEffect(() => {
    if (id) {
      fetchProduct(+id);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setProduct({ ...data });
    }
  }, [data]);

  // TODO Переделать верстку
  return (
    <main className={styles.container}>
      {product && (
        <>
          <H2Title title={product.title} />
          <div className={styles.wrapper}>
            <div className={styles.galery}>
              <img
                src={product.images[0]}
                alt="product"
              />
              <div className={styles.miniPhotos}>
                {product.images ? (
                  product.images.map((img, i) => {
                    return (
                      <img
                        key={img + i}
                        src={img}
                        alt="mini product"
                        className={styles.miniPhoto}
                      />
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionTitle}>
                <H3Title title={product.title} />
                <ProductCharacteristic
                  charName="SKU ID"
                  charValue={product.id}
                  disabled={true}
                  fieldName="id"
                />
              </div>
              <form
                className={styles.descriptionWrapper}
                onSubmit={handlerSubmit}
              >
                <ProductCharacteristic
                  charName="Rating"
                  charValue={product.rating}
                  disabled={true}
                  rating={product.rating}
                  fieldName="rating"
                />
                <ProductCharacteristic
                  charName="Base price"
                  charValue={isDisabled ? `${product.price} $` : product.price}
                  disabled={isDisabled}
                  fieldName="price"
                />
                <ProductCharacteristic
                  charName="Discount percentage"
                  charValue={
                    isDisabled
                      ? `${product.discountPercentage} %`
                      : product.discountPercentage
                  }
                  disabled={isDisabled}
                  fieldName="discountPercentage"
                />
                <ProductCharacteristic
                  charName="Discount price"
                  charValue={`${(
                    product.price -
                    (product.price / 100) * product.discountPercentage
                  ).toFixed(2)} $`}
                  disabled={true}
                  fieldName="discountPrice"
                />
                <ProductCharacteristic
                  charName="Stock"
                  charValue={product.stock}
                  disabled={isDisabled}
                  fieldName="stock"
                />
                <ProductCharacteristic
                  charName="Brand"
                  charValue={`${product.brand}`}
                  disabled={isDisabled}
                  fieldName="brand"
                />
                <ProductCharacteristic
                  charName="Category"
                  charValue={`${product.category}`}
                  disabled={isDisabled}
                  fieldName="category"
                />
                <ProductCharacteristic
                  charName="Description"
                  charValue={`${product.description}`}
                  disabled={isDisabled}
                  fieldName="description"
                />
                <div className={styles.buttonWrapper}>
                  <Button
                    type="accent"
                    eventType={isDisabled ? "submit" : "button"}
                    title={isDisabled ? "Edit" : "Save"}
                    handlerClick={handlerClick}
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
