import { useState } from "react";
import "../App.css";

const Toggle = () => {
  const [dark, setDark] = useState("#242424");

  const handleDarkMode = () => {
    if (dark === "#242424") {
      setDark("white");
    } else {
      setDark("#242424");
    }
  };

  return (
    <div style={{ backgroundColor: "#242424", color: "white" }}>
      <button
        className="my-2"
        style={{
          backgroundColor: dark,
          color: dark === "#242424" ? "white" : "#242424",
        }}
        onClick={handleDarkMode}
      >
        {dark === "#242424" ? "Enable Light Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
};

export default Toggle;
