import { ReactComponent as Star } from "../../assets/icons/star.svg";

interface IRating {
  count: number;
  rating: number;
}

export const Rating = ({ count = 5, rating = 0 }: IRating) => {
  const stars = Array(count).fill(<Star />);

  return (
    <>
      {stars.map((star, index) => (
        <Star
          style={
            index + 1 <= Math.round(rating)
              ? { fill: "#F14F4F" }
              : { fill: "#c2c2c2" }
          }
        />
      ))}
    </>
  );
};
