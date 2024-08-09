import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TimeCount = () => {
  const [count, setCount] = useState(60);
  const [copy, setCopy] = useState("");
  const codeString = `import { useEffect, useState } from "react";

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
    <div>
      <button disabled={true}>Time Counter : {count}</button>
    </div>
  );
};

export default TimeCount;
`;

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return clearTimeout(count);
    }
  }, [count]);

  return (
    <>
      <div style={{ backgroundColor: "#242424", color: "white" }}>
        <button style={{ color: "white", marginRight: "10px" }} disabled={true}>
          Time Counter : {count}
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
      ;
    </>
  );
};

export default TimeCount;
