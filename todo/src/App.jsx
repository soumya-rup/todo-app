import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem from "./component/Todoitem";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <div className="item-comtainer">
        <Todoitem item="Buy milk" date="4/10/2023" />
        <Todoitem item="Go college" date="4/10/2023" />
      </div>
    </center>
  );
}

export default App;
