import React from "react";
import ReactDOM from "react-dom/client";
import UseMemo from "./UseMemo";
import Review from "./MemozedFn";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>

    <UseMemo />
  </React.StrictMode>
);
