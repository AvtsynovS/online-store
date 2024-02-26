import { useEffect, useState } from "react";
import { Rating } from "../Rating";
import styles from "./ProductCharacteristic.module.scss";

interface IProductCharacteristic {
  charName: string;
  charValue: string | number;
  disabled?: boolean;
  rating?: number;
  fieldName: string;
}

export const ProductCharacteristic = ({
  charName,
  charValue,
  disabled,
  rating = 0,
  fieldName,
}: IProductCharacteristic) => {
  const classNames = require("classnames");
  const [value, setValue] = useState(charValue);

  useEffect(() => {
    setValue(charValue);
  }, [charValue]);

  return (
    <>
      {charName === "Rating" ? (
        <div className={styles.characteristic}>
          <label
            className={styles.characteristicName}
            htmlFor={charName}
          >
            {charName}
          </label>
          <div className={styles.characteristicValue}>
            <Rating
              count={5}
              rating={rating}
            />
          </div>
        </div>
      ) : (
        <div className={styles.characteristic}>
          <label
            className={styles.characteristicName}
            htmlFor={charName}
          >
            {charName}
          </label>
          <input
            name={fieldName}
            className={classNames(
              styles.characteristicValue,
              !disabled && styles.edit,
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={disabled}
          />
        </div>
      )}
    </>
  );
};
