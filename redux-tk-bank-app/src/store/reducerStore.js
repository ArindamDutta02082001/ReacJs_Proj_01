import { configureStore } from "@reduxjs/toolkit";

/*
 * reducer1 , reducer2 , reducer3 ... etc are serveral reducers that are stored in the store variable
 * each reducer is created for each functionality like cart , login , etc
 */

// reducer 1
import amountSlice from "./slices/amountSlice";
// reducer 2
import bonusSlice from "./slices/bonusSlice";

// reducer 3 ( custom reducer )
import customRewardReducer from "./slices/rewardSlice";

// set of all reducers registered
export const reducerStore = configureStore({
  reducer: {
    amountReducer: amountSlice,
    bonusReducer: bonusSlice,
    rewardReducer: customRewardReducer,
  },
});
