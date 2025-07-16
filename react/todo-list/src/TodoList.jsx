import React from "react";
import { useState } from "react";

let initialState = [
  {
    task: "wake up 7am",
    isComplete: false,
  },
];
function TodoList() {
  const [text, setText] = useState();
  const [tasks, setTasks] = useState(initialState);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");
  function addTask() {
    setTasks([...tasks, { task: text, isComplete: false }]);
    setText("");
  }
  function markComplete(e, i) {
    let newTasks = [...tasks];
    newTasks[i].isComplete = e.target.checked;
    setTasks(newTasks);
  }
  function editTask(i) {
    setEdit(i);
    setEditText(tasks[i].task)
  }
  function saveTask(i) {
    let newTasks = [...tasks]
    newTasks[i].task = editText
    setTasks(newTasks)
    setEdit(null);
  }
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <button onClick={addTask}>add task</button>
      <ul>
        {tasks.map((v, i) => {
          return (
            <li
              style={{ textDecoration: v.isComplete ? "line-through" : "none" }}
              key={i}
            >
              <input
                onChange={(e) => markComplete(e, i)}
                type="checkbox"
                checked={v.isComplete}
              />
              {edit == i ? (
                <>
                  {" "}
                  <input
                    onChange={(e) => setEditText(e.target.value)}
                    type="text"
                    value={editText}
                  />{" "}
                  <button onClick={() => saveTask(i)}>save</button>{" "}
                </>
              ) : (
                <>
                  {v.task}{" "}
                  <button onClick={() => editTask(i)}>Edit Task</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
