import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const PickColor = () => {
  const [color, setColor] = useState("#aabbcc");
  const [msg, setMsg] = useState(false);
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export const PickColor = () => {
  const [color, setColor] = useState("#aabbcc");
  const [msg, setMsg] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setMsg(true);

    setTimeout(() => {
      setMsg(false);
    }, 800);
  };

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <button type="button" onClick={handleClick}>
        {color}
        {msg ? (
          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            Hex Color Copied
            <span className="visually-hidden">unread messages</span>
          </span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};
`;

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setMsg(true);

    setTimeout(() => {
      setMsg(false);
    }, 800);
  };

  return (
    <>
      <div className="container d-flex" style={{ justifyContent: "center" }}>
        <HexColorPicker color={color} onChange={setColor} />
        <button
          type="button"
          style={{ backgroundColor: color }}
          className="btn btn-primary position-relative"
          onClick={handleClick}
        >
          {color}
          {msg ? (
            <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
              Hex Color Copied
              <span className="visually-hidden">unread messages</span>
            </span>
          ) : (
            ""
          )}
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
