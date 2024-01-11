/**
 * this component teach about custom reducer
 * simple tag to display the reward earned 
 * per >=100 rs amt added , reward point increase by one
 * also , useSelector() is used to access bonus , that are stored in the store
 */

import { useSelector } from "react-redux";

function Reward() {
  let rewardPoint = useSelector((state) => state.rewardReducer.points);

  return (
    <div className="App">
      <h3>RewardComponent.js</h3>
      <h3>Total Reward earned Rs {rewardPoint}</h3>
    </div>
  );
}

export default Reward;
