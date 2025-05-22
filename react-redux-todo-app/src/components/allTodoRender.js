
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/actions/todoAction";

function RenderTodos() {
 
   // also , useSelector() is used to access all the data (todos , that are stored in the store)
   // state.todo.todos  --> redux store , defined inside the ./store/reduceStore.js
  const todos = useSelector((state) => state.todo.todos);

  // setting the data to the central store 
  const dispatch = useDispatch();

  return (
    <>
      <h3 style={{color:"red"}}>Todos Render Component 2 : consuming the todo from central store</h3>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
            style={{ backgroundColor: todo.highlight ? 'yellow' : 'transparent' ,  color: todo.highlight ? 'black' : 'white'}}
            >

            <h5>{todo.text}</h5>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderTodos;
