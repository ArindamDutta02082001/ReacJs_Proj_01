
// src/actionTypes.js
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


// Action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(), // Similar to nanoid or unique id to each todo
    text:text,
    highlight : false
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
