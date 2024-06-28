import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

function Display() {
    const {count}=useContext(CounterContext)
  return (
      <div>
          <h1>Displaying THe count:{ count}</h1>
    </div>
  )
}

export default Display