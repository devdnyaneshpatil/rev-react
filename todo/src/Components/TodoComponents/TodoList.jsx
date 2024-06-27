import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  filteredTodoList,
  currentTodo,
  handleUpdate,
  handleCancelEdit,
  handleEdit,
  handleChangeStatus,
  handleCurrentTodoChange,
}) {
  return (
    <ul>
      {filteredTodoList.map((todo) => {
        return (
          <TodoItem
            currentTodo={currentTodo}
            handleUpdate={handleUpdate}
            handleCancelEdit={handleCancelEdit}
            handleEdit={handleEdit}
            handleChangeStatus={handleChangeStatus}
            todo={todo}
            handleCurrentTodoChange={handleCurrentTodoChange}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
