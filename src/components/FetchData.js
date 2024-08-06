import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/9")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div style={{ backgroundColor: "#242424", color: "white" }}>
      {data ? (
        <div>
          <h1>ID : {data.id}</h1>
          <h1>{data.title}</h1>
        </div>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default FetchData;
