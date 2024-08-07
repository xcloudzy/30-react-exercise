import React, { useReducer, useState } from "react";

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
    </>
  );
}
