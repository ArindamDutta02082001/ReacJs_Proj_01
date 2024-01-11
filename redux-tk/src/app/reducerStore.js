import { configureStore } from "@reduxjs/toolkit";

/*
 * reducer1 , reducer2 , reducer3 ... etc are serveral reducers that are stored in the store variable
 * each reducer is created for each functionality like cart , login , etc
 */

// reducer  1
import ToDoReducer from "../features/todo/todoSlice";

// this reducerStore will be passed to <Provider> as store
export const reducerStore = configureStore({
  reducer: { todoReducerStore: ToDoReducer },
});
