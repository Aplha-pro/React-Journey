function Header() {
    let foodItem = ['Dal' , 'Green Vegetabels' , 'Beans']
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItem.map((item) => (<li class="list-group-item">{item}</li>))}
      </ul>
    </>
  );
}
export default Header;
