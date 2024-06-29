import { memo } from "react";
import "./css/App.css"

function MemoReview(Prop : {star : number , stat : String}) {
    console.log("rendered for " + Prop.star);
  return (
    <div className="App">
      <h6>Memoized function component</h6>
      <h6>check console.log </h6>
       <h1>Count : {Prop.star}</h1>
       <h1>Review : {Prop.stat}</h1>
    </div>
  );
}

// this function component is memoized if you remove this lines 
// then this component will render on every button click
const Review = memo(MemoReview);
export default Review;

