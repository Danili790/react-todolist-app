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
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              text={todo.text}
              completed={todo.completed}
              onClick={() => handleDeleteTodo()}
            />
            <button onClick={handleDeleteTodo}>Delete</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTodo}
        placeholder="Nouvelle tache"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleMarkAsDone}>Done</button>
    </div>
  );
}

export default App;
