import React, { useState } from "react";
import TodoInput from "./TodoComponents/TodoInput";
import TodoFilter from "./TodoComponents/TodoFilter";
import TodoList from "./TodoComponents/TodoList";

function Todos() {
  const [todo, setTodo] = useState({
    name: "",
    status: false,
  });
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [filter, setFilter] = useState("all");
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    todo.id = todoList.length + 1;
    setTodoList([...todoList, todo]);
    setTodo({ name: "", status: false });
  };
  const handleUpdate = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id == id ? { ...todo, name: currentTodo.name } : todo
    );
    setTodoList(updatedTodoList);
    setCurrentTodo(null);
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
  };

  const handleCurrentTodoChange = (e) => {
    setCurrentTodo({ ...currentTodo, name: e.target.value })
  }
  const handleCancelEdit = () => {
    setCurrentTodo(null);
  };
  const handleChangeStatus = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id == id ? { ...todo, status: !todo.status } : todo
    );
    setTodoList(updatedTodoList);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "true") return todo.status;
    if (filter === "false") return !todo.status;
    return true;
  });

  return (
    <>
      <div>
        <TodoInput
          todo={todo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TodoFilter handleFilterChange={handleFilterChange} filter={filter} />
      </div>
      <div>
        <TodoList
          filteredTodoList={filteredTodoList}
          currentTodo={currentTodo}
          handleUpdate={handleUpdate}
          handleCancelEdit={handleCancelEdit}
          handleEdit={handleEdit}
          handleChangeStatus={handleChangeStatus}
          todo={todo}
          handleCurrentTodoChange={handleCurrentTodoChange}
        />
      </div>
    </>
  );
}

export default Todos;
