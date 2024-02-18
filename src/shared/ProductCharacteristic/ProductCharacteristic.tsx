import styles from "./ProductCharacteristic.module.scss";

interface IProductCharacteristic {
  charName: string;
  charValue: string;
}

export const ProductCharacteristic = ({
  charName,
  charValue,
}: IProductCharacteristic) => {
  return (
    <div className={styles.characteristic}>
      <p className={styles.characteristicName}>{charName}</p>
      <p className={styles.characteristicValue}>{charValue}</p>
    </div>
  );
};
