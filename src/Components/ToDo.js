import React from "react";

const ToDo = (props) => {
  return (
    <div className="todo">
      <div className="todo--left">
        <p>{props.body}</p>
      </div>

      <div className="todo--right">
        <button
          className="ui button green"
          onClick={() => props.deleteSelectedToDo(props.id)}
        >
          Done
        </button>
        <button
          className="ui button red"
          onClick={() => props.deleteSelectedToDo(props.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ToDo;
