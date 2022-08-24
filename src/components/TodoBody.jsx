import React from "react";

export default function TodoBody() {
  const todos = [{ id: 1, text: "Hello Todo 1" }];

  return todos.map((todo, index) => (
    <div id="tasks" key={index}>
      <div className="task">
        <div className="content">
          <input className="text" value={todo.text} readOnly={true} />
        </div>
        <div className="actions">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  ));
}
