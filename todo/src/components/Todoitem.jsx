function Todoitem({ itemname, itemdate, click }) {
  return (
    <div className="container ">
      <div className="row rup-r">
        <div className="col-6">{itemname}</div>
        <div className="col-4">{itemdate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger rup-b"
            onClick={() => click(itemname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
