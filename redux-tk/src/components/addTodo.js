import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e) {
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <>
      <h1>This is a Todo App built with redux</h1>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        onClick={(e) => {
          addTodoHandler(e);
        }}
      >
        Add Todo
      </button>
    </>
  );
}

export default AddTodo;
