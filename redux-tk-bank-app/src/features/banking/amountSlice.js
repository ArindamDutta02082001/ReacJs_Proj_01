
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../apiCalls/getUsers";

const initialState = {
  totalMoney: 0,
  users: [],
};

/************************ asyncThunk for async api calls**************************** */
export const asyncThunkUsers = createAsyncThunk(
  "Amount/getUser",
  async (param, thunkApi) => {
    return getUsers()
      .then((ele) => {
        return ele;
      })
      .catch((err) => console.log(err));
  }
);

export const accoutSlice = createSlice({
  name: "Amount",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.totalMoney += 1;
    },
    decrement: (state, action) => {
      state.totalMoney -= 1;
    },
    incrementByAmount: (state, action) => {
      state.totalMoney += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        state.users = action.payload;
        //another pending attribute is inserted
        state.pending = false;
      })
      .addCase(asyncThunkUsers.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(asyncThunkUsers.rejected, (state, action) => {
        //another error attribute is inserted
        state.error = action.error;
      });
  },
});

export const { increment, decrement, incrementByAmount } = accoutSlice.actions;

export default accoutSlice.reducer;
