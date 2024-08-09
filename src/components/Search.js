import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Search = ({ quotes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";

export const Search = ({ quotes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = quotes.filter((quote) =>
    quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Search for something..."
        />
      </form>

      <div>
        <ul>
          {filteredItems.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
`;

  const filteredItems = quotes.filter((quote) =>
    quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container ">
        <form className="d-flex" role="search" style={{ color: "white" }}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control bg-body-dark"
            data-bs-theme="dark"
            type="search"
            placeholder="Search for something..."
          />
        </form>

        <div className="mt-6">
          <ul className="list-group bg-body-dark" data-bs-theme="dark">
            {filteredItems.map((quote, index) => (
              <li
                style={{
                  marginTop: "15px",
                  marginRight: "20px",
                }}
                className="list-group-item"
                key={index}
              >
                {quote}
              </li>
            ))}
          </ul>
        </div>
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
