import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const RandomQ = () => {
  const [copy, setCopy] = useState("");
  const codeString = `const RandomQ = () => {
  const quotes = [
    "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    "It is impossible to manufacture or imitate love",
    "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
    "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    "Every human life is worth the same, and worth saving.",
    "Have a biscuit, Potter.",
    "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    "Socks are Dobby’s favorite, favorite clothes, sir!",
  ];

  const randomQuotes = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuotes];

  return (
    <div>
      <span>{quote}</span>
    </div>
  );
};

export default RandomQ;
`;

  const quotes = [
    "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    "It is impossible to manufacture or imitate love",
    "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
    "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    "Every human life is worth the same, and worth saving.",
    "Have a biscuit, Potter.",
    "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    "Socks are Dobby’s favorite, favorite clothes, sir!",
  ];

  const randomQuotes = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuotes];

  return (
    <>
      <div style={{ backgroundColor: "#242424", color: "white" }}>
        <span className="my-5">{quote}</span>
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

export default RandomQ;
