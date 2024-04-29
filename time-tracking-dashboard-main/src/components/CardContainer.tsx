import Card from "./Card";
import data from "/src/data/data.json";
import "./CardContainer.scss";
import { useState } from "react";

type TimeCount = {
  current: number;
  previous: number;
};

type Timeframe = "daily" | "weekly" | "monthly";

type Timeframes = {
  daily: TimeCount;
  weekly: TimeCount;
  monthly: TimeCount;
};

type Activity = {
  title: string;
  timeframes: Timeframes;
};

type Activities = Activity[];

interface CardContainerProps {
  timeframe: Timeframe;
}

type TimeframeKey = "daily" | "weekly" | "monthly";

const CardContainer: React.FC<CardContainerProps> = () => {
  /* const [timeframe, setTimeframe] = useState<TimeframeKey>("daily"); */
  let cards = data.map((activity: Activity, i: number) => {
    return (
      <Card
        key={i}
        category={activity.title}
        timeframes={activity.timeframes}
      />
    );
  });
  return <div className="CardContainer">{cards}</div>;
};
export default CardContainer;
