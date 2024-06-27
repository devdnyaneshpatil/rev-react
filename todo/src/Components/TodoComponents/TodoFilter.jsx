import React from 'react'

function TodoFilter({handleFilterChange,filter}) {
  return (
      <div>
          <select onChange={handleFilterChange} value={filter}>
          <option value="all">All Todos</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
    </div>
  )
}

export default TodoFilter