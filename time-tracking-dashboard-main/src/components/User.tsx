import styles from "./User.module.scss";

type TimeframeKey = "daily" | "weekly" | "monthly";

type User = {
  name: string;
  picture: string;
};

type UserProps = {
  user: User;
  timeframe: TimeframeKey;
  handleChangeTimeframe: (timeframeKey: TimeframeKey) => void;
};

const User = ({ user, timeframe, handleChangeTimeframe }: UserProps) => {
  return (
    <div className={styles.User}>
      <div className={styles.User__info}>
        <img className={styles.User__picture} src={user.picture} alt="" />
        <p className={styles.User__name}>
          Report for <span>{user.name}</span>
        </p>
      </div>
      <div className={styles.User__timeframes}>
        <span
          onClick={() => handleChangeTimeframe("daily")}
          data-active={timeframe == "daily" ? 1 : null}
        >
          Daily
        </span>
        <span
          onClick={() => handleChangeTimeframe("weekly")}
          data-active={timeframe == "weekly" ? 1 : null}
        >
          Weekly
        </span>
        <span
          onClick={() => handleChangeTimeframe("monthly")}
          data-active={timeframe == "monthly" ? 1 : null}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default User;
