import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../App.css";

const Toggle = () => {
  const [dark, setDark] = useState("#242424");
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";

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
    <div>
      <button
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
`;

  const handleDarkMode = () => {
    if (dark === "#242424") {
      setDark("white");
    } else {
      setDark("#242424");
    }
  };

  return (
    <>
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

export default Toggle;
