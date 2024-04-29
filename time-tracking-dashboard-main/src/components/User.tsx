import "./User.scss";

type Timeframe = "daily" | "weekly" | "monthly";

type User = {
  name: string;
  picture: string;
};

type UserProps = {
  user: User;
  timeframe: Timeframe;
  handleChangeTimeframe: (timeframeKey: Timeframe) => void;
};

const User = ({ user, timeframe, handleChangeTimeframe }: UserProps) => {
  return (
    <div className="User">
      <div className="User__info">
        <img className="User__picture" src={user.picture} alt="" />
        <p className="User__name">
          Report for <span>{user.name}</span>
        </p>
      </div>
      <div className="User__timeframes">
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
