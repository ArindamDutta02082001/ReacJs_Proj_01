import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoAction";

function AddTodo() {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function addTodoHandler(e) {

    // setting the data to the central store 
    dispatch(addTodo(input));
    setInput("");
  }

/*
* simple input tag and a button to capture new todo
* here useDispatch() , is used to call the addTodo() reducer function
*/

  return (
    <>
      <h1>This is a Todo App built with react-redux</h1>
       <h3 style={{color:"red"}} >Todos Component 1 : add new todo to the central store</h3>

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
