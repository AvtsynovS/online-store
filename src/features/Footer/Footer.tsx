import { useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

interface IFooter {
  brand: string;
  menuItems: string[];
}

export const Footer = ({ brand, menuItems }: IFooter) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <footer className={styles.container}>
          <div className={styles.brand}>{brand}</div>
          <ul className={styles.menu}>
            {menuItems.map((item, index) => {
              return (
                <li
                  className={styles.menuItem}
                  key={index}
                >
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            })}
          </ul>
        </footer>
      )}
    </>
  );
};
