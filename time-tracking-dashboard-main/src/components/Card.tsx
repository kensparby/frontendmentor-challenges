import { useState } from "react";
import "./Card.scss";

type Timeframe = {
  current: number;
  previous: number;
};

type Timeframes = {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
};

type CardProps = {
  category: string;
  timeframes: Timeframes;
};

type TimeframeKey = "daily" | "weekly" | "monthly";

const Card = ({ category, timeframes }: CardProps) => {
  const [timeframe, setTimeframe] = useState<TimeframeKey>("daily");
  /* console.log(category, timeframes); */

  return (
    <div className={`Card Card-${category.replace(" ", "")}`}>
      <p className="Card__category">{category}</p>
      <span className="Card__menuBtn"></span>
      <p className="Card__timeTracked">{timeframes[timeframe].current}</p>
    </div>
  );
};

export default Card;
