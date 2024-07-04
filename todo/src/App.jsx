import "./App.css";
import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [todoitems, settodoitems] = useState([]);
  const Additem = (name, date) => {
    if (name != "") {
      const newtodoitems = [...todoitems, { name: name, date: date }];
      settodoitems(newtodoitems);
    }
  };
  const handeldel = (itemname) => {
    const newTodo = todoitems.filter((item) => item.name !== itemname);
    settodoitems(newTodo);
  };

  return (
    <Container>
      <Heading />
      {todoitems.length === 0 && (
        <p className="welcome">Welcome Have a nice day!</p>
      )}
      <div className="todocontainer">
        <AddTodo click={Additem} />
        <TodoItems todoitems={todoitems} del={handeldel} />
      </div>
    </Container>
  );
}

export default App;
