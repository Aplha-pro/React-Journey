import { Header } from "./components/Header";
import Apptodo from "./components/AppToDo";
import Item1 from "./components/ToolItem1";
import Item2 from "./components/ToolItem2";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <Header />
        <Apptodo />
        <div className="item-container">
          <Item1 />
          <Item2 />
        </div>
      </center>
    </>
  );
}

export default App;
