import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/portfolio">Portfolio</Link>
  </div>
)

export default NavBar
