import Child from "./Child";
import "./index.css";
import { useState } from "react";

// importing the context
import { Context } from "./context-create/CreateContext";

export default function Parent() {
  let [theme] = useState("dark");

  // this data and functions are to be passed in the provider in the value={}
  // so that they can be accessed and controlled by the child

  const data = { name: "Arindam", age: 12, mode: "dark" };

  function lightTheme() {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add("light");
  }
  function darkTheme() {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add("dark");
  }

  return (
    <div>
      <Context.Provider value={{ data, lightTheme, darkTheme, theme }}>
        <Child />
      </Context.Provider>
    </div>
  );
}
