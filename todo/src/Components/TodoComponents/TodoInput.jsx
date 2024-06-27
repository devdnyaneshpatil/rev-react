import React from 'react'

function TodoInput({todo,handleChange,handleSubmit}) {
  return (
      <div>
          <input
          type="text"
          name="name"
          value={todo.name}
          placeholder="Enter todo name"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add todo</button>
    </div>
  )
}

export default TodoInput