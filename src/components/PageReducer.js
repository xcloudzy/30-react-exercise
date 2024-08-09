import React, { useEffect, useReducer, useMemo, useState } from "react";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload };
    case "INSERT_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default function PageReducer() {
  const data = useMemo(
    () => Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`),
    []
  );
  const [copy, setCopy] = useState("");
  const codeString = `import React, { useEffect, useReducer, useMemo } from "react";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload };
    case "INSERT_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default function PageReducer() {
  const data = useMemo(
    () => Array.from({ length: 25 }, (_, index) => 'Item {index + 1}'),
    []
  );

  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: data.length, // Set initial totalItems
  });

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, [data]); // Only run once on mount because data is memoized

  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  const displayedItems = data.slice(startIndex, lastIndex);

  const handlePageClick = (newPage) => {
    dispatch({ type: "INSERT_CURRENT_PAGE", payload: newPage });
  };

  return (
    <>
      <h1>Reducer Pagination</h1>
      <div>
        <div>
          {displayedItems.map((item, index) => (
            <Alert icon={false} key={index}>
              {item}
            </Alert>
          ))}
        </div>
      </div>
      <div>
        <Button
          onClick={() => handlePageClick(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
        >
          &#8249; Prev
        </Button>
        <Button
          onClick={() => handlePageClick(paginationState.currentPage + 1)}
          disabled={lastIndex >= data.length}
        >
          Next &#8250;
        </Button>
      </div>
    </>
  );
}
`;

  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: data.length, // Set initial totalItems
  });

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, [data]); // Only run once on mount because data is memoized

  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  const displayedItems = data.slice(startIndex, lastIndex);

  const handlePageClick = (newPage) => {
    dispatch({ type: "INSERT_CURRENT_PAGE", payload: newPage });
  };

  return (
    <>
      <h1>Reducer Pagination</h1>
      <div style={{ minHeight: "50vh" }}>
        <div
          className="my-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {displayedItems.map((item, index) => (
            <Alert
              sx={{ bgcolor: "rgb(7, 19, 24)", color: "white" }}
              className="mx-2"
              icon={false}
              key={index}
            >
              {item}
            </Alert>
          ))}
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => handlePageClick(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
          variant="contained"
        >
          &#8249; Prev
        </Button>
        <Button
          onClick={() => handlePageClick(paginationState.currentPage + 1)}
          disabled={lastIndex >= data.length}
          variant="contained"
        >
          Next &#8250;
        </Button>
      </div>
      {/* example code  */}
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
