import React from "react";
import "./Card.scss";

type TimeCount = {
  current: number;
  previous: number;
};

type Timeframes = {
  daily: TimeCount;
  weekly: TimeCount;
  monthly: TimeCount;
};

type CardProps = {
  category: string;
  timeframe: TimeframeKey;
  timeframes: Timeframes;
};

type TimeframeKey = "daily" | "weekly" | "monthly";

const Card = React.memo(({ category, timeframe, timeframes }: CardProps) => {
  /* const [timeframe, setTimeframe] = useState<TimeframeKey>("daily"); */

  return (
    <div className={`Card Card-${category.replace(" ", "")}`}>
      <p className="Card__category">{category}</p>
      <span className="Card__menuBtn"></span>
      <p className="Card__timeTracked">{timeframes[timeframe].current}</p>
    </div>
  );
});

export default Card;
