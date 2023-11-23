import React from "react";

function Todo({ text, completed }) {
  const style = {
    textDecoration: completed ? "line-through" : "",
  };
  return <li style={style}>{text}</li>;
}
export default Todo;
