import { useEffect, useRef, useState } from "react";
import ChildComp from "./Child"

export default function ForwardRef() {
  const [val, setVal] = useState("");
  let inputRef = useRef(null);

  function updateInput() {
    setVal(inputRef.current.value);
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <hr />
      <h1>forwardRef Example in React </h1>
      <ChildComp refs={inputRef} />
      <button onClick={updateInput}>Update Input Box</button>
      <h2>You set : {val} </h2>
    </div>
  );
}

