import Card from "./Card";
import data from "/src/data/data.json";
import styles from "./CardContainer.module.scss";

type TimeCount = {
  current: number;
  previous: number;
};

type TimeframeKey = "daily" | "weekly" | "monthly";

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

type CardContainerProps = {
  timeframe: TimeframeKey;
};

const CardContainer = ({ timeframe }: CardContainerProps) => {
  /* const [timeframe, setTimeframe] = useState<TimeframeKey>("daily"); */
  let cards = data.map((activity: Activity) => {
    return (
      <Card
        key={activity.title}
        category={activity.title}
        timeframe={timeframe}
        timeframes={activity.timeframes}
      />
    );
  });
  return <div className={styles.CardContainer}>{cards}</div>;
};
export default CardContainer;
