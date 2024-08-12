import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function MultiState() {
  const [copy, setCopy] = useState("");
  const codeString = `import React, { useState } from "react";

export default function MultiState() {
  const [state, setState] = useState({
    count: 0,
    text: "Hello World!",
    isActive: true,
  });

  const incrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };
  const changeText = () => {
    setState({ ...state, text: "updated Text" });
  };
  const toggleActive = () => {
    setState({ ...state, isActive: !state.isActive });
  };

  return (
    <>
      <div>Multiple States Example</div>
      <p>Count : {state.count}</p>
      <p>Text : {state.text}</p>
      <p>Active : {state.isActive ? "YES" : "NO"}</p>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={toggleActive}>Toggle Active</button>
    </>
  );
}
`;

  const [state, setState] = useState({
    count: 0,
    text: "Hello World!",
    isActive: true,
  });

  const incrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };
  const changeText = () => {
    setState({ ...state, text: "updated Text" });
  };
  const toggleActive = () => {
    setState({ ...state, isActive: !state.isActive });
  };

  return (
    <>
      <div>
        <h2>Multiple States Management</h2>
        <p>Count : {state.count}</p>
        <p>Text : {state.text}</p>
        <p>Active : {state.isActive ? "YES" : "NO"}</p>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={changeText}>Change Text</button>
        <button onClick={toggleActive}>Toggle Active</button>
      </div>
      <div
        className="mt-4"
        style={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: "40%",
            backgroundColor: "#29344A",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex justify-content-between px-4 text-white text-xs align-items-center">
            <p className="text-sm mt-3 ">Example Code</p>
            {copy ? (
              <button
                style={{ backgroundColor: "#29344A", outline: "none" }}
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copied!
              </button>
            ) : (
              <button
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "100",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              marginBottom: 0,
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
