import AddTodo from "./components/addTodo";
import RenderTodos from "./components/allTodoRender";
import "./App.css";
import { Provider } from "react-redux";
import { reducerStore } from "./app/reducerStore";
function App() {
  return (
    <>
      <Provider store={reducerStore}>
        <AddTodo />
        <RenderTodos />
      </Provider>
    </>
  );
}

export default App;
