import React from "react";

function TodoItem({
  currentTodo,
  handleUpdate,
  handleCancelEdit,
  handleEdit,
  handleChangeStatus,
    handleCurrentTodoChange,
  todo
}) {
  return (
    <li>
      {currentTodo && currentTodo.id == todo.id ? (
        <>
          <input
            type="text"
            name="name"
            value={currentTodo.name}
            onChange={handleCurrentTodoChange}
          />
          <button onClick={() => handleUpdate(todo.id)}>Update</button>
          <button onClick={handleCancelEdit}>Cancel edit</button>
        </>
      ) : (
        <>
          {todo.name}
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <input
            type="checkbox"
            onChange={() => {
              handleChangeStatus(todo.id);
            }}
            checked={todo.status}
          />
        </>
      )}
    </li>
  );
}

export default TodoItem;
