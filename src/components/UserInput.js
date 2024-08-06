import { useState } from "react";

const UserInput = () => {
  const [text, setText] = useState("");

  return (
    <div className="container" style={{ backgroundColor: "#242424", color: "white" }}>
      <div className="input-group mb-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control bg-body-dark" data-bs-theme="dark"
          placeholder="Input Something"
        />
      </div>
      <br />
      <span style={{ marginLeft: "10px" }}>
        {!text ? "Input Something to view here" : text.toUpperCase()}
      </span>
    </div>
  );
};

export default UserInput;
