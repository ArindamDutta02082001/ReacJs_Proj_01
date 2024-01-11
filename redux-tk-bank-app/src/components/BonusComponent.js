/*
 * simple  button to increase the bonus value
 * here useDispatch() , is used to call the incrementBonus() reducer function
 * also , useSelector() is used to access bonus , that are stored in the store
 */

import { useDispatch, useSelector } from "react-redux";
import { incrementBonus } from "../features/banking/bonusSlice";

function Bonus() {
  let bonus = useSelector((state) => state.bonusReducer.bonus);
  let dispatchFn = useDispatch();

  return (
    <div className="App">
      <h3>BonusComponent.js</h3>
      <h3>Total Bonus Rs {bonus}</h3>
      <div id="appValue">
        <button
          onClick={() => {
            dispatchFn(incrementBonus());
          }}>
          increment +
        </button>
      </div>
    </div>
  );
}

export default Bonus;
