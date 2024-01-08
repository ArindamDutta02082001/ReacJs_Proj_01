import { configureStore } from "@reduxjs/toolkit";

// reducer
import ToDoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: ToDoReducer,
});
