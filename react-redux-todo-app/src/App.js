import AddTodo from "./components/addTodo";
import RenderTodos from "./components/allTodoRender";
import { Provider } from "react-redux";
import { reducerStore } from "./store/reducerStore";
function App() {
  return (
    <>
    {/* giving the store to all the child components */}
      <Provider store={reducerStore}>
        <AddTodo />
        <RenderTodos />
      </Provider>
    </>
  );
}

export default App;
