import { useCallback, useState } from "react";
import styles from "./App.module.scss";

import User from "./components/User";
import CardContainer from "./components/CardContainer";

type TimeframeKey = "daily" | "weekly" | "monthly";

// Hardcoded for display purposes, since the supplied data is missing these.
const user = {
  name: "Jeremy Robson",
  picture: "https://i.pravatar.cc/200?img=68",
};

function App() {
  const [timeframe, setTimeframe] = useState<TimeframeKey>("daily");
  const handleChangeTimeframe = useCallback((timeframeKey: TimeframeKey) => {
    setTimeframe(timeframeKey);
  }, []);

  return (
    <div className={styles.App}>
      <User
        user={user}
        timeframe={timeframe}
        handleChangeTimeframe={handleChangeTimeframe}
      />
      <CardContainer timeframe={timeframe} />
    </div>
  );
}

export default App;
