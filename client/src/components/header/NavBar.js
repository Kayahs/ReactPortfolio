import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  containerDiv: {
    textAlign: 'center',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    maxHeight: '',
  },
  linkBox: {
    color: '#fff',
    border: '1px solid #399BDB',
    padding: '5% 0',
    width: '100%',
    textDecoration: 'none',
    fontSize: '30px',
  },
}

const NavBar = () => (
  <div style={styles.containerDiv}>
    <NavLink activeClassName={'active-nav'} className={'nav'} exact to="/">
      Home
    </NavLink>
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/about">
      About
    </NavLink>
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/resume">
      Resume
    </NavLink>
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/portfolio">
      Portfolio
    </NavLink>
  </div>
)

export default NavBar
