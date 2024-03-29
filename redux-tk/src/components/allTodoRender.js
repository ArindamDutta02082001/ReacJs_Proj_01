/*
 * simple input tag and a button to capture new todo
 * here useDispatch() , is used to call the removeTodo() reducer function
 * also , useSelector() is used to access all the todos , that are stored in the store
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function RenderTodos() {
  const todos = useSelector((state) => state.todoReducerStore.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}>
            <h5>{todo.text}</h5>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderTodos;
