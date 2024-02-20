import styles from "./Button.module.scss";

type ButtonTypes = "primary" | "secondary" | "ghost" | "accent";

interface IButton {
  type: ButtonTypes;
  title: string;
  isBorder?: boolean;
  isWhite?: boolean;
  handlerClick: () => void;
}

export const Button = ({
  title,
  type,
  isBorder,
  isWhite,
  handlerClick,
}: IButton) => {
  const classNames = require("classnames");

  return (
    <div className={styles.container}>
      <button
        className={classNames(
          styles.button,
          styles[type],
          isBorder && styles.withBorder,
          isWhite && styles.white
        )}
        onClick={() => handlerClick()}
      >
        {title}
      </button>
    </div>
  );
};
