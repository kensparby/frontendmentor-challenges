import React from "react";
import styles from "./Card.module.scss";
import icon_ellipsis from "/images/icon-ellipsis.svg";

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
  return (
    <div
      className={`${styles.Card} ${styles[`Card-${category.replace(" ", "")}`] || ""}`}
    >
      <p className={styles.Card__category}>{category}</p>
      <span className={styles.Card__menuBtn}>
        <img src={icon_ellipsis} alt="" />
      </span>
      <p className={styles.Card__timeTracked}>
        {timeframes[timeframe].current}hr
        {timeframes[timeframe].current === 1 ? "" : "s"}
      </p>
      <p className={styles.Card__lastTimeframe}>
        Last{" "}
        {timeframe === "daily"
          ? "Day"
          : timeframe === "weekly"
            ? "Week"
            : "Month"}{" "}
        - {timeframes[timeframe].previous}hr
        {timeframes[timeframe].previous === 1 ? "" : "s"}
      </p>
    </div>
  );
});

export default Card;
