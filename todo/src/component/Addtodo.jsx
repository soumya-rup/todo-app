function Addtodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success my-b">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;