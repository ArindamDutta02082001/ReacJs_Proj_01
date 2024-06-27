import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  // how to use Slider
  // how to use useRef Hook
  
  let [length, setLength] = useState(4);
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);

  let [pwd, setPwd] = useState("");

  let pwdRef = useRef(null);
  let copyRef = useRef(null);

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let special = '!@#$%^&*()_+{}[]":<>';
    if (num) str += numbers;
    if (char) str += special;

    for (let i = 0; i <= length; i++) {
      const ind = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(ind);
    }
    setPwd(pass);
  }, [length, num, char]);

  function copytoClip() {
    window.navigator?.clipboard?.writeText(pwdRef.current?.value);
    copyRef.current.style.display = "inline";
    console.log(pwdRef.current?.value, "copied");
    setTimeout(() => {
      copyRef.current.style.display = "none";
    }, 1000);
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <input
        style={{ width: "20vw" }}
        type="text"
        name=""
        value={pwd}
        id="pwdText"
        placeholder="Password"
        readOnly
        ref={pwdRef}
      />
      <button
        onClick={() => {
          copytoClip();
        }}
      >
        COPY
      </button>
      <span style={{ color: "green", display: "none" }} ref={copyRef}>
        {" "}
        Copied!
      </span>
      <br />
      <input
        type="range"
        min={6}
        max={40}
        value={length}
        name="slide"
        id=""
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />{" "}
      <span>Length : {length}</span>
      <input
        type="checkbox"
        name="checkNum"
        id=""
        onChange={(e) => {
          setNum((num = !num));
        }}
      />
      <span>Number</span>
      <input
        type="checkbox"
        name="checkChar"
        id=""
        onChange={(e) => {
          setChar((char = !char));
        }}
      />
      <span>Character</span>
    </div>
  );
}

export default App;
