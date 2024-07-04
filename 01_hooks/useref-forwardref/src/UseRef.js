import { useEffect, useRef, useState } from "react";

function UseRef() {
  let [length, setLength] = useState(4);
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);

  let [pwd, setPwd] = useState("");

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

  // this is how useRef hook are used
  // variables are linked with the target elem
  let pwdRef = useRef(null);
  let copyRef = useRef(null);

  function copytoClip() {
    window.navigator?.clipboard?.writeText(pwdRef.current?.value);
    copyRef.current.style.display = "inline";
    console.log(pwdRef.current?.value, "copied");
    setTimeout(() => {
      copyRef.current.style.display = "none";
      pwdRef.current.style.color = "red";
    }, 1000);
  }

  return (
    <div className="App">

      <h1 ref={pwdRef}> ref & useRef example </h1>
      <h1 ref={pwdRef}> Password Generator </h1>
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
        }}>
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

export default UseRef;
