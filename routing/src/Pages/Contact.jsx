import React from 'react'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'

function Contact() {
    const {pathname}=useLocation()
  return (
      <div>
          <Navbar currentPath={pathname} />
          <h1>This is contact page</h1>
    </div>
  )
}

export default Contact