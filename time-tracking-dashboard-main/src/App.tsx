import { useState } from "react";
import "./App.scss";

import User from "./components/User";
import CardContainer from "./components/CardContainer";

type TimeframeKey = "daily" | "weekly" | "monthly";

// Hardcoded for display purposes, since the data is missing a name.
const user = {
  name: "Jeremy Robson",
  picture: "https://i.pravatar.cc/200?img=68",
};

function App() {
  const [timeframe, setTimeframe] = useState<TimeframeKey>("daily");
  const handleChangeTimeframe = (timeframeKey: TimeframeKey) => {
    setTimeframe(timeframeKey); // TODO
  };

  return (
    <div className="App">
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
