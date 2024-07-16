import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import RouterPath from "./routerPaths/RouterPaths";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterPath />
  </React.StrictMode>
);

