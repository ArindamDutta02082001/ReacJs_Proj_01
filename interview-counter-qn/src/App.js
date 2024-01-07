import "./App.css";
import React, { useState } from "react";
function App() {
  //variable declaration  dont see
  // what is the difference betwee the below 2
  const str = `function increment()
  {
  setCount((count += 1))
  setCount((count += 1))
  setCount((count += 1))
  setCount((count += 1))
}`;

  const ans = `function increment() {
  setCount((c)=>{c += 1})
  setCount((c)=>{c += 1})
  setCount((c)=>{c += 1})
  setCount((c)=>{c += 1})

}`;
  /////////////   end  ///////////////

  let [count, setCount] = useState(10);
  function increment() {
    setCount((count += 1));
  }

  function decrement() {
    setCount((count -= 1));
  }

  return (
    // counter app start
    <div className="App">
      <div>
        <p>The value of Count is : {count}</p>

        <button
          onClick={() => {
            decrement();
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            increment();
          }}
        >
          increment
        </button>
      </div>

      <hr />

      {/* end counter app */}
      <div>
        <b>
          {" "}
          Q first interview qn : will the counter update 4 time if I write{" "}
        </b>{" "}
        <br />
        <pre>
          <code> {str}</code>
        </pre>
      </div>
      <div>
        <p>
          Ans - No it will update single time | as in useState , setCount will
          set the new value for the DOM to update in the next render. so it will
          update the state (state Var) at chunk only oncee | instead if we write
          the below code it will update directly 4 times <br />
          in the down we are taking the previous value and then telling DOM for
          updating it
        </p>
        <br />
        <pre>
          <code> {ans}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
