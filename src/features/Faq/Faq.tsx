import { useState } from "react";
import { AccordionItem } from "../../shared";
import styles from "./Faq.module.scss";

type Question = {
  id: number;
  question: string;
  answer: string;
};

interface IFaq {
  faqList: Question[];
}

export const Faq = ({ faqList }: IFaq) => {
  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>FAQ</h4>
      <ul className={styles.accordion}>
        {faqList.map((item) => {
          return (
            <AccordionItem
              question={item}
              isOpen={item.id === openAnswer}
              key={item.id}
              handlerClick={() => {
                item.id === openAnswer
                  ? setOpenAnswer(null)
                  : setOpenAnswer(item.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};
