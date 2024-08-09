import React, { useReducer, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "REMOVE":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};

export default function TDList() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [taskTest, setTaskTest] = useState("");
  const [copy, setCopy] = useState("");
  const codeString = `import React, { useReducer, useState } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "REMOVE":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};

export default function TDList() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [taskTest, setTaskTest] = useState("");

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: taskTest });
    setTaskTest("");
  };

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <div>
          <input
            value={taskTest}
            onChange={(e) => setTaskTest(e.target.value)}
            type="text"
            placeholder="Add a new task"
          />
          <button disabled={taskTest ? false : true} onClick={addTask}>
            Add Task
          </button>
        </div>
        <div>
          {tasks.map((task) => (
            <div>
              <div>
                <p>{task.text}</p>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: task.id })}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
`;

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: taskTest });
    setTaskTest("");
  };

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <input
            value={taskTest}
            onChange={(e) => setTaskTest(e.target.value)}
            data-bs-theme="dark"
            className="form-control me-2"
            style={{ width: "20%" }}
            type="text"
            placeholder="Add a new task"
          />
          <button disabled={taskTest ? false : true} onClick={addTask}>
            Add Task
          </button>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 my-2 m-0 mt-4"
          style={{ justifyContent: "center" }}
        >
          {tasks.map((task) => (
            <div
              className="card border-success mb-3"
              data-bs-theme="dark"
              style={{ margin: "0px 5px", maxWidth: "18rem" }}
            >
              <div className="card-body">
                <p className="card-text">{task.text}</p>
              </div>
              <div className="card-footer bg-transparent border-success">
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: task.id })}
                  className="btn btn-outline-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* example code */}
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
