import styles from "./Footer.module.scss";

interface IFooter {
  menuItems: string[];
}

export const Footer = ({ menuItems }: IFooter) => {
  return (
    <footer className={styles.container}>
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
    </footer>
  );
};
