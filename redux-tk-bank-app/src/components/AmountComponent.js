/**
 * this component teaches about the  reducer and asyncThunk 
 * 
 * simple input tag and a button to increment and decrement total amount in Bank
 * if the entered amount is >=100 , rewawrd point increase by 1
 * 
 * a button to fetch users from api 
 * 
 * here useDispatch() , is used to call the increment() , decrement() , incrementByAmount() ,asyncThunkUsers() reducer function
 * also , useSelector() is used to access the userList and total balance , that are stored in the store
 */

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/banking/amountSlice";
import { useState } from "react";
import { asyncThunkUsers } from "../features/banking/amountSlice";

function Amount() {
  let [spAmt, setspAmt] = useState(0);
  const money = useSelector((state) => state.amountReducer.totalMoney);
  const dispatchFn = useDispatch();

  let users = useSelector((state) => state.amountReducer.users);

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
          increment +
        </button>

        <button
          onClick={() => {
            dispatchFn(decrement());
          }}>
          decrement -
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
