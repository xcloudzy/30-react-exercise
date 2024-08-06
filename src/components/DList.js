// import { useState } from "react";

const DList = () => {
  const items = ["item1", "item2", "item3", "item4", "item5", "item6"];
  //   const [item, setItem] = useState([]);

  //   const handleClick = () => {
  //     setItem(items);
  //   };

  return (
    <div className="container" style={{ width: "10%" }}>
      {/* <button onClick={handleClick}>Show List</button> */}
      <ul className="list-group bg-body-dark" data-bs-theme="dark">
        {items.map((el, index) => {
          return (
            <li className="list-group-item" key={index}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DList;
