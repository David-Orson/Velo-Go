import React from "react";

const ToDo = (props) => {
  return (
    <div className="todo">
      <div className="todo--left">
        <p>{props.value}</p>
      </div>

      <div className="todo--right">
        <button className="ui button green">Done</button>
        <button className="ui button red">X</button>
      </div>
    </div>
  );
};

export default ToDo;
