import styles from "./Button.module.scss";

type ButtonTypes = "primary" | "secondary" | "ghost" | "accent";

interface IButton {
  type: ButtonTypes;
  title: string;
  isBorder?: boolean;
}

export const Button = ({ title, type, isBorder }: IButton) => {
  return (
    <div className={styles.container}>
      <button
        className={styles[type]}
        style={
          isBorder
            ? {
                border: `1px solid #444B58`,
                borderRadius: "4px",
                padding: "13px 42px",
              }
            : {}
        }
      >
        {title}
      </button>
    </div>
  );
};
