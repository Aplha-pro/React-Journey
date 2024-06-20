function Item2() {
  let TodoName = "Go to College";
  let TodoDate = "6/20/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger kg-button width">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item2;