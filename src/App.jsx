import React, { useState } from "react";

import Todo from "./Todo";

function App({ todos }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    todos.push({ text: newTodo, completed: false });
    setNewTodo("");
  };
  const handleMarkAsDone = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = true;
  };

  const handleDeleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
  };
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </ul>

      <input
        type="text"
        value={newTodo}
        placeholder="Nouvelle tache"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}></button>
      <button onClick={handleDeleteTodo}></button>
      <button onClick={handleMarkAsDone}></button>
    </>
  );
}

export default App;
