import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  asyncThunkUsers
} from "../store/slices/amountSlice";
import { useState } from "react";


/**
 * this component teaches about the  reducer and asyncThunk 
 * 
 * simple input tag and a button to increment and decrement total amount in Bank
 * if the entered amount is >=100 , rewawrd point increase by 1
 * 
 * a button to fetch users from api 
 * 
*/

function Amount() {
  let [spAmt, setspAmt] = useState(0);

  // used to fetch the data from the store
  const money = useSelector((state) => state.amountReducer.totalMoney);
  let users = useSelector((state) => state.amountReducer.users);

  // used to set the data to the store
  const dispatchFn = useDispatch();

  

  return (
    <div className="App">
      <h1>Banking App using pure redux</h1>
      <h3>AmountComponent.js</h3>
      <h3>Total Account Balance Rs {money}</h3>
      <div id="appValue">
        <button
          onClick={() => {
            dispatchFn(increment());
          }}>
          INC +
        </button>

        <button
          onClick={() => {
            dispatchFn(decrement());
          }}>
          DEC -
        </button>

        <input
          type="text"
          placeholder="enter amt to inc"
          name=""
          id="customNumber"
          onChange={(e) => {
            setspAmt(parseInt(e.target.value));
          }}
        />

        <button
          onClick={() => {
            dispatchFn(incrementByAmount(spAmt));
          }}>
          increment by ${spAmt}
        </button>
      </div>
      {/* ****************************** get  user list****************************** */}

      <div id="userList">
        <button
          onClick={() => {
            dispatchFn(asyncThunkUsers());
          }}>
          Get Users
        </button>
        <ul>
          {users?.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Amount;
