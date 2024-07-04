import React from "react";
import ReactDOM from "react-dom/client";
import UseRef from "./UseRef";
import ForwardRef from "./ForwardRef";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseRef />
    <ForwardRef />
  </React.StrictMode>
);
