// function Header() {
//   let foodItem = ["Dal", "Green Vegetabels", "Beans"];
//   if (foodItem.length < 5) {
//     return <h3>Items are less than 5</h3>;
//   } else {
//     return (
//       <>
//         <h1>Healthy Food</h1>
//         <ul className="list-group">
//           {foodItem.map((item) => (
//             <li key={item} className="list-group-item">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
// export default Header;
function Header() {
  let foodItem = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItem.length === 0 ? <h3>Items are less than 5</h3> : null}
      <ul className="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Header;
