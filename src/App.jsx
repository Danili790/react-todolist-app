import React, { useState } from "react";

import Todo from "./Todo";

function App({ todos }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    todos.push({ text: newTodo, completed: false });
    setNewTodo("");
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
    </>
  );
}

export default App;
