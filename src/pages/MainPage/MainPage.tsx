import { Article, Team } from "../../entities";
import { Catalog, HeaderArticle, RecomendedProducts } from "../../widgets";
import member1 from "../../assets/photos/member-command-1.jpg";
import member2 from "../../assets/photos/member-command-2.jpg";
import member3 from "../../assets/photos/member-command-3.jpg";
import member4 from "../../assets/photos/member-command-4.jpg";
import member5 from "../../assets/photos/member-command-5.jpg";
import member6 from "../../assets/photos/member-command-6.jpg";

import styles from "./Main.module.scss";
import { Faq } from "../../features";

const teamPhotos = [member1, member2, member3, member4, member5, member6];
const faqList = [
  {
    id: 1,
    question: "Question 1",
    answer: "Long answer to the first question",
  },
  {
    id: 2,
    question: "Question 2",
    answer: "",
  },
];

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <HeaderArticle />
      <Catalog />
      <Article />
      <RecomendedProducts />
      <Team teamPhotos={teamPhotos} />
      <Faq faqList={faqList} />
    </main>
  );
};
