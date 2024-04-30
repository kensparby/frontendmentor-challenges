import React from "react";
import styles from "./Card.module.scss";

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

  {
    /* <div className={`${styles.Card} Card-${category.replace(" ", "")}`}> */
  }
  return (
    <div
      className={`${styles.Card} ${styles[`Card-${category.replace(" ", "")}`] || ""}`}
    >
      <p className={styles.Card__category}>{category}</p>
      <span className={styles.Card__menuBtn}></span>
      <p className={styles.Card__timeTracked}>
        {timeframes[timeframe].current}
      </p>
    </div>
  );
});

export default Card;
