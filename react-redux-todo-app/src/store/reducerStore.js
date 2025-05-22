
import {combineReducers, createStore , applyMiddleware } from "redux"
import highlightMiddleware from './middleware/middlewares';
/*
 * reducer1 , reducer2 , reducer3 ... etc are serveral reducers that are stored in the store variable
 * each reducer is created for each functionality like cart , login , etc
 */

// reducer  1
import {todoReducer} from "./reducers/todoReducer";

// reducer 2

// reducer 3
//
//
//
// ...... more reducers





// this reducerStore will be passed to <Provider> as store


// set of all reducers registered
const rootReducer = combineReducers({
  todo: todoReducer
  // now state.todo.todos  in useSelector()
})

export const reducerStore = createStore(
  rootReducer ,
  applyMiddleware(highlightMiddleware)
);

// ***************************************************************************************
// when we will use redux-toolkit , we will make the reducerStore like configureStore

// we will use configureStore 
// import { configureStore, createReducer  } from "@reduxjs/toolkit";
// export const reducerStore = configureStore({
//   reducer: { todoReducerStore: ToDoReducer },
// });



