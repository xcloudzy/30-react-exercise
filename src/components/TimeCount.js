import { useEffect, useState } from "react";

const TimeCount = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return clearTimeout(count);
    }
  }, [count]);

  return (
    <div style={{ backgroundColor: "#242424", color: "white" }}>
      <button style={{ color: "white", marginRight: "10px" }} disabled={true}>
        Time Counter : {count}
      </button>
    </div>
  );
};

export default TimeCount;
