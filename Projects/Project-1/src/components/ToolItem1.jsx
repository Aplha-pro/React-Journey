function Item1() {
  let TodoName = "Buy Cow";
  let TodoDate = "6/20/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4 width">{TodoName}</div>
        <div class="col-4 width">{TodoDate}</div>
        <div class="col-3 width">
          <button type="button" class="btn btn-danger kg-button width">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item1;
