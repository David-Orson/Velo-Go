import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import ToDo from "./ToDo";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState(["take trash", "walk dog"]);

  const toDosMarkup = toDos.map((todo) => <ToDo value={todo} key={uuid()} />);

  return (
    <div>
      <h1>To Do List</h1>
      <div className="ui container">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button className="ui button blue">Add</button>
        </div>
        <div>{toDosMarkup}</div>
      </div>
    </div>
  );
};

export default ToDoList;
