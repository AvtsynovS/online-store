import { useNavigate } from "react-router-dom";
import { Button } from "../../shared";

import styles from "./HeaderArticle.module.scss";

export const HeaderArticle = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.article}>
        <p className={styles.title}>
          Any products from famous brands with worldwide delivery
        </p>
        <div className={styles.bgBrand}>Goods4you</div>

        <p className={styles.paragraph}>
          We sell smartphones, laptops, clothes, shoes
        </p>
        <p className={styles.paragraph}>
          and many other products at low prices
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          title="Go to shopping"
          type="accent"
          handlerClick={() => navigate(`all-products`)}
        />
      </div>
    </div>
  );
};
