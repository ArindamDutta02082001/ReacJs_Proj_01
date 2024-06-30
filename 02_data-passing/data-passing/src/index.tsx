import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Profile from "./Parent-Child/Parent";
import ParentComponent from "./Child-Parent/Parents";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <h1>Parent to Child </h1>
      <Profile />
      <hr />
      <h1>Child to Parent </h1>
      <ParentComponent />
    </>
  </React.StrictMode>
);
