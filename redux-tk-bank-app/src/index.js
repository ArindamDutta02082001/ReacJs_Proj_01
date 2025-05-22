import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { reducerStore } from "./store/reducerStore";
import Amount from "./components/AmountComponent";
import Bonus from "./components/BonusComponent";
import Reward from "./components/RewardOn100";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={reducerStore}>
      <Amount />
      <Bonus />
      <Reward />
    </Provider>
  </React.StrictMode>
);
