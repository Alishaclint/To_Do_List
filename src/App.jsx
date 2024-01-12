import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="todo" id="app">
      <h1 className="title" style={{color:'green', textAlign:'center'}}>Todo List </h1>

      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;