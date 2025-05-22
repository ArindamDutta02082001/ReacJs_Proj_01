
import { ADD_TODO, REMOVE_TODO } from '../actions/todoAction';


// initial state or the main store
const initialState = {
  todos: [{ id: 1, text: "Hello world" , highlight : false }],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
