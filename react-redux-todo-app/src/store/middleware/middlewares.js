import { ADD_TODO } from '../actions/todoAction';

// a middle ware to highlight the todo entered in the input field if it contains "create" word
const highlightMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO) {
    const text = action.payload.text || action.payload;

    // highighting
    if (text?.toLowerCase().includes("create")) {
      const modifiedAction = {
        ...action,
        payload: {
          ...action.payload,
          highlight: true,
        },
      };
      action = modifiedAction;
    }
  }

  return next(action);
};

export default highlightMiddleware;