/**
 * createAction, createReducer   helps us to create our own reducer and actions
 */

import { createAction, createReducer } from "@reduxjs/toolkit";

const rewardActionInc = createAction("Amount/incrementByAmount");

const initialState = { points: 0 };

const customRewardReducer = createReducer(initialState, (builder) => {

  builder
  .addCase(rewardActionInc, (state, action) => {
    if (action.payload >= 100) state.points += 1;
  });

});

export default customRewardReducer;
