import React from "react";

const Item = ({ todo, index, doneTodo, deleteTodo, editTodo }) => {
  const handleEdit = () => {
    const editedMessage = prompt("Edit message", todo.name);
    if (editedMessage !== null) {
      editTodo(todo.id, editedMessage);
    }
  };

  return (
    <div>
      <h2>
        <span>{`${index + 1}`}</span>
        {todo.name}
      </h2>

      <p>
        {todo.status === "new"
          ? "Todo is not done"
          : todo.status === "processing"
          ? "Todo is Processing"
          : "Completed!!!"}
      </p>

      <button onClick={() => doneTodo(todo.id)}>Done</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Item;
