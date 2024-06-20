function Apptodo() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">
            <input type="text" placeholder="Enter todo here"></input>
        </div>

        <div class="col-4">
            <input type="date" />
        </div>

        <div class="col-3">
        <button type="button" class="btn btn-success kg-button width">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Apptodo;