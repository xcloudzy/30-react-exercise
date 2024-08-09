import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UserInput = () => {
  const [text, setText] = useState("");
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";

const UserInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Input Something"
        />
      </div>
      <br />
      <span>{!text ? "Input Something to view here" : text.toUpperCase()}</span>
    </div>
  );
};

export default UserInput;
`;

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#242424", color: "white" }}
      >
        <div className="input-group mb-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="form-control bg-body-dark"
            data-bs-theme="dark"
            placeholder="Input Something"
          />
        </div>
        <br />
        <span style={{ marginLeft: "10px" }}>
          {!text ? "Input Something to view here" : text.toUpperCase()}
        </span>
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
};

export default UserInput;
