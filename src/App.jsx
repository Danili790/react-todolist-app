import React from "react";
import { useState } from "react";
import { todos } from "./todo.jsx";

const apps = todos;

function App({}) {
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    apps.push({ id, text: newTodo, completed: false });
    setNewTodo("");
  };
  const handleMarkAsDone = (id) => {
    const todo = apps.filter((todo) => todo.id === id);
    todo.completed = true;
  };

  const handleDeleteTodo = (id) => {
    const index = apps.filter((todo) => todo.id === id);
    apps.splice(index, 1);
  };
  // const DeleteButton = ({ id }) => {
  //   return <button onClick={() => handleDeleteTodo(id)}>Delete</button>;
  // };
  return (
    <div>
      <ul>
        {apps.map((todo) => {
          <li key={todo.id} userId={todo.id} onClick={handleMarkAsDone()}>
            <button key={todo.id} onClick={() => handleDeleteTodo()}>
              Delete
            </button>
          </li>;
        })}
      </ul>

      <input
        type="text"
        value={newTodo}
        placeholder="Nouvelle tache"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo()}></button>
    </div>
  );
}

export default App;
