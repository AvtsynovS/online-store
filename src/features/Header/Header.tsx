import { useState } from "react";
import basket from "../../assets/icons/basket.svg";
import styles from "./Header.module.scss";

interface IHeader {
  menuItems: string[];
  productsCount?: number;
}

export const Header = ({ menuItems, productsCount }: IHeader) => {
  // TODO Если продукт есть в карзине - показать индикатор
  const [hasProducts, setHasProducts] = useState(false);
  productsCount = 1;
  return (
    <>
      <header className={styles.container}>
        <div className={styles.menuWrapper}>
          <div className={styles.brand}>Goods4you</div>
          <ul className={styles.menu}>
            {menuItems.map((item, index) => {
              return (
                <li
                  className={styles.menuItem}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className={styles.wrapper}>
            <div className={styles.cart}>Cart</div>
            {/* TODO добавить обработку клика и переход в карзину */}
            <div className={styles.basket}>
              <img
                src={basket}
                className="basket"
                alt="basket"
              />
              {productsCount && (
                <div className={styles.productsCount}>{productsCount}</div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
