import React from 'react'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'

function Home() {
    const {pathname}=useLocation()
  return (
      <div>
          <Navbar currentPath={pathname} />
          <h1>Welcome Home</h1>
    </div>
  )
}

export default Home