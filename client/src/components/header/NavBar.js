import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  containerDiv: {
    textAlign: 'center',
    width: '30%',
    display: 'flex',
    justifyContent: 'space-around',
    marginRight: 'auto'
  }
}

const NavBar = () => (
  <div style={styles.containerDiv}>
    {/*<NavLink activeClassName={'active-nav'} className={'nav'} exact to="/">
      Home
    </NavLink>
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/resume">
    Resume
  </NavLink> */}
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/portfolio">
      Portfolio
    </NavLink>
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/about">
      About
    </NavLink>
    <NavLink activeClassName={'active-nav'} className={'nav'} to="/contact">
      Contact
    </NavLink>
  </div>
)

export default NavBar
