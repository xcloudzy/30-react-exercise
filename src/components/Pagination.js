import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Pagination = ({ quotes, quotesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * quotesPerPage;
  const indexOfFirstItem = indexOfLastItem - quotesPerPage;
  const currentItem = quotes.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumber = [];
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";

const Pagination = ({ quotes, quotesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * quotesPerPage;
  const indexOfFirstItem = indexOfLastItem - quotesPerPage;
  const currentItem = quotes.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(quotes.length / quotesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <h2>You are viewing page {currentPage}</h2>
      <div>
        <ul>
          {currentItem.map((quote, index) => {
            return <li key={index}>{quote}</li>;
          })}
        </ul>
        <div>
          <ul>
            {pageNumber.map((number) => {
              return (
                <button key={number} onClick={() => setCurrentPage(number)}>
                  Page {number}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
`;

  for (let i = 1; i <= Math.ceil(quotes.length / quotesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <h2 className="mb-4">You are viewing page {currentPage}</h2>
      <div className="container" style={{ width: "50%" }}>
        <ul className="list-group bg-body-dark" data-bs-theme="dark">
          {currentItem.map((quote, index) => {
            return (
              <li className="list-group-item " key={index}>
                {quote}
              </li>
            );
          })}
        </ul>
        <div style={{ marginTop: "100px" }}>
          <ul className="container">
            {pageNumber.map((number) => {
              return (
                <button
                  key={number}
                  className="mx-2"
                  onClick={() => setCurrentPage(number)}
                >
                  Page {number}
                </button>
              );
            })}
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

export default Pagination;
