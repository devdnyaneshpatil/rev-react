import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

function Counter() {
    const {handleChange} = useContext(CounterContext)
  return (
      <div>
          <button onClick={handleChange}>Increase Count</button>
    </div>
  )
}

export default Counter