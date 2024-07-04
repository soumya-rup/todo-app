import { useState } from "react";

function AddTodo({ click }) {
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");
  const handelname = (event) => {
    event.target.value === null ? null : settodoname(event.target.value);
  };
  const handeldate = (event) => {
    event.target.value === null ? null : settododate(event.target.value);
  };
  const handelonclick = () => {
    click(todoname, tododate);
    settododate("");
    settodoname("");
  };
  return (
    <div className="container ">
      <div className="row rup-r">
        <div className="col-6">
          <input type="text" value={todoname} onChange={handelname} />
        </div>
        <div className="col-4">
          <input type="date" value={tododate} onChange={handeldate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success rup-b"
            onClick={() => handelonclick(todoname)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
