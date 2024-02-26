import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { Button } from "../../shared";

interface IHeader {
  menuItems?: string[];
  brand: string;
}

export const Header = ({ menuItems, brand }: IHeader) => {
  const navigate = useNavigate();
  const location = useLocation();

  const classNames = require("classnames");

  return (
    <>
      <header
        className={classNames(
          styles.container,
          location.pathname !== "/" && styles.headerPadding,
        )}
      >
        <div className={styles.brand}>{brand}</div>
        {location.pathname === "/" && (
          <div className={styles.menuWrapper}>
            {menuItems && (
              <ul className={styles.menu}>
                {menuItems &&
                  menuItems.map((item, index) => {
                    return (
                      <li
                        className={styles.menuItem}
                        key={item + index}
                      >
                        {item === "For staff" ? (
                          <NavLink
                            to={`all-products`}
                            className={({ isActive, isPending }) =>
                              isActive ? "active" : isPending ? "pending" : ""
                            }
                          >
                            {item}
                          </NavLink>
                        ) : (
                          <a href={`#${item}`}>{item}</a>
                        )}
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
        )}

        {location.pathname !== "/" && (
          <Button
            type="ghost"
            title="Back to site"
            isWhite
            handlerClick={() => navigate("/")}
          />
        )}
      </header>
    </>
  );
};
