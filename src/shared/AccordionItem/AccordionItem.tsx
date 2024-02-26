import { useRef } from "react";
import plus from "../../assets/icons/plus.svg";
import styles from "./AccordionItem.module.scss";

type Question = {
  id: number;
  question: string;
  answer: string;
};

interface IAccordionItem {
  question: Question;
  handlerClick: () => void;
  isOpen: boolean;
}
export const AccordionItem = ({
  question,
  handlerClick,
  isOpen,
}: IAccordionItem) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const classNames = require("classnames");

  return (
    <li
      className={styles.accordionItem}
      key={question.id}
      onClick={() => handlerClick()}
    >
      <div className={styles.faqQuestion}>
        <div>{question.question}</div>
        <button
          className={styles.accordionHeader}
          onClick={() => handlerClick()}
        >
          <img
            className={isOpen ? styles.active : ""}
            src={plus}
            alt=""
          />
        </button>
      </div>

      <div
        className={classNames(styles.accordionCollapse)}
        style={
          isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
        }
      >
        <div
          className={styles.accordionBody}
          ref={itemRef}
        >
          {question.answer}
        </div>
      </div>
    </li>
  );
};
