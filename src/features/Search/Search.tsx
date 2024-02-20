import { useEffect, useState } from "react";
import { Button, useDebounced } from "../../shared";
import styles from "./Search.module.scss";
import { useActions, useLazySearchProductsQuery } from "../../app";

// TODO доделать поиск
export const Search = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounced(search);
  const { changeSearchProducts } = useActions();
  const [fetchSearch, { data: products }] = useLazySearchProductsQuery();

  const handlerClick = (search: string) => {
    fetchSearch(search);
    setSearch("");
  };

  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      fetchSearch(search);
      setSearch("");
      console.log(`запрос отправлен`);
    }
  };

  useEffect(() => {
    fetchSearch(search);
    console.log(`debounced`);
  }, [debounced]);

  useEffect(() => {
    if (products) {
      changeSearchProducts(products);
    }
  }, [changeSearchProducts, products]);

  return (
    <div className={styles.search}>
      <input
        placeholder="Search by title"
        className={styles.inputSearch}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={onPressEnter}
      />
      <Button
        title="Search"
        type="accent"
        handlerClick={() => handlerClick(search)}
      />
    </div>
  );
};
