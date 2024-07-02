function Todoitem(props) {
  return (
    <div className="container">
      <div className="row rup-row">
        <div className="col-6">{props.item}</div>
        <div className="col-4">{props.date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-b">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
