import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bonus: 0,
};

export const bonusSlice = createSlice({
  name: "Bonus",
  initialState,
  reducers: {
    incrementBonus: (state, action) => {
      state.bonus += 1;
    },
  },
});

export const { incrementBonus } = bonusSlice.actions;

export default bonusSlice.reducer;
