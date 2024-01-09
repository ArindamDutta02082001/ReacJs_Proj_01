import { configureStore } from "@reduxjs/toolkit";

/*
 * reducer1 , reducer2 , reducer3 ... etc are serveral reducers that are stored in the store variable
 * each reducer is created for each functionality like cart , login , etc
 */


// reducer  1
import ToDoReducer from "../features/todo/todoSlice";

export const reducerStore = configureStore({
  reducer: ToDoReducer,
});
