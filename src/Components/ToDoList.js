import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { addToDo, deleteToDo } from "../redux/actions/dataActions";
import { useSelector, useDispatch } from "react-redux";

import ToDo from "./ToDo";

const ToDoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const toDos = useSelector((state) => state.toDos);

  const setToDo = (toDo) => dispatch(addToDo(toDo));

  const deleteSelectedToDo = (id) => dispatch(deleteToDo(id));

  const toDosMarkup = toDos.map((todo) => (
    <ToDo
      body={todo.body}
      key={todo.id}
      id={todo.id}
      deleteSelectedToDo={deleteSelectedToDo}
    />
  ));

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setToDo({
      id: uuid(),
      body: text,
    });
    setText("");
  };

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
          <button className="ui button blue" onClick={onSubmit}>
            Add
          </button>
        </div>
        <div>{toDosMarkup}</div>
      </div>
    </div>
  );
};

export default ToDoList;
