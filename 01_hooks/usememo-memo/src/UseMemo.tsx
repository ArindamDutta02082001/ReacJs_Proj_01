import { useMemo, useState } from "react";
import Review from "./MemozedFn";

// Initialize array with numbers from 0 to 99999
const array: number[] = Array.from({ length: 100000 }, (_, index) => index);

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);

  // Expensive function: console to be printed only when INC is pressed
  function getMulAfterAdd(): number {
    console.log("********************");
    return array.reduce((acc, num) => acc + num, 0) * add;
  }

  // useMemo to memoize result of getMulAfterAdd()
  const MultipliedVal = useMemo(() => getMulAfterAdd(), [add]); // line 1

  return (
    <div className="tutorial">
      {/* ******************************* useMemo() hook **************************************** */}
      <h1>useMemo Hook</h1>
      <h1>Add Val: {add}</h1>
      <button onClick={() => setAdd(add + 1)}>Increment</button>
      <h1>Sub Val: {sub}</h1>
      <button onClick={() => setSub(sub - 1)}>Decrement</button>
      <h1>Mul Val: {MultipliedVal}</h1>
      {/* <h1>Mul Val: {getMulAfterAdd()}</h1>        */} {/* line 2 */}
      {/* uncomment line 1 and 2 , to see that c.l is printed upon both button click */}
      {/* ******************************* Memozised fn comp **************************************** */}
      <h1>memo() Fn </h1>
      {/* if you remove this lines  from Review Comp , then that component will render on every button click
            const Review = memo(MemoReview);
            export default Review; 
      */}
      <Review star={sub} stat= "good" />
    </div>
  );
}

export default App;
