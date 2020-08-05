import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import ToDo from "./ToDo";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([
    { body: "take trash", id: 1 },
    { body: "walk dog", id: 2 },
  ]);

  const deleteToDo = (id, toDos, setToDos) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const toDosMarkup = toDos.map((todo) => (
    <ToDo
      value={todo.body}
      key={todo.id}
      id={todo.id}
      deleteToDo={(id) => deleteToDo(id, toDos, setToDos)}
    />
  ));

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
          <button
            className="ui button blue"
            onClick={() => {
              setToDos([...toDos, { body: text, id: uuid() }]);
              setText("");
            }}
          >
            Add
          </button>
        </div>
        <div>{toDosMarkup}</div>
      </div>
    </div>
  );
};

export default ToDoList;
