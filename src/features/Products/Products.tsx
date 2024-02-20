import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { Button } from "../../shared";
import { useAppSelector, useLazyProductsQuery } from "../../app";
import { Product } from "../../entities";

export const Products = () => {
  const [limit, setLimit] = useState(9);
  const { filterProducts } = useAppSelector((state) => state.filterProducts);
  const [visibleButton, setVisibleButton] = useState(true);
  const [fetchProducts, { isLoading, isError, data }] = useLazyProductsQuery();

  const products = filterProducts.length > 0 ? filterProducts : data;

  const handlerClick = () => {
    if (products?.length === 99) {
      setVisibleButton(false);
    }
    setLimit(limit + 9);
  };

  useEffect(() => {
    fetchProducts(limit);
  }, [fetchProducts, limit]);

  useEffect(() => {
    if (filterProducts.length > 0) {
    }
  }, [filterProducts]);

  return (
    <div className={styles.container}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Somting went wrong...</div>}
      {products &&
        products.map((product) => {
          return (
            <Product
              id={product.id}
              title={product.title}
              img={product.images[0]}
              price={product.price}
            />
          );
        })}
      {visibleButton && (
        <div className={styles.buttonWrapper}>
          <Button
            type="accent"
            title="Show more"
            handlerClick={() => handlerClick()}
          />
        </div>
      )}
    </div>
  );
};
