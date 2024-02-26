import bgPattern from "../../assets/bg-pattern-2.svg";
import styles from "./Team.module.scss";

interface ITeam {
  teamPhotos: string[];
}

export const Team = ({ teamPhotos }: ITeam) => {
  return (
    <div
      className={styles.container}
      id="Our team"
    >
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Our team</h4>
        <div className={styles.content}>
          {teamPhotos.map((photo, i) => {
            return (
              <img
                key={photo + i}
                src={photo}
                alt="member comand"
                className={styles.teamPhoto}
              />
            );
          })}
        </div>
      </div>
      <img
        src={bgPattern}
        alt="bg pattern"
        className={styles.bgPattern}
      />
    </div>
  );
};
