import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface IProps {
  rating: {
    rate: number;
  };
}

const StarRating: React.FC<IProps> = ({ rating }) => {
  const [starRating, setStarRating] = useState<number>(rating.rate);

  return (
    <div className="flex items-center justify-start gap-1">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <label key={index} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              onChange={() => setStarRating(index)}
              value={starRating}
              checked={index === starRating}
              className="hidden"
            />
            <FaStar
              className="transform hover:scale-150 transition-all"
              color={index <= starRating ? "#FFDF00" : "#bbb"}
            />
          </label>
        ))}
    </div>
  );
};

export default StarRating;
