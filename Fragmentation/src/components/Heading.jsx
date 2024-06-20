function Header() {
    let foodItem = ['Dal' , 'Green Vegetabels' , 'Beans']
    let foodId = [1,2,3]
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItem.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
      </ul>
    </>
  );
}
export default Header;
