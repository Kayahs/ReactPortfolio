import React from 'react'
// import { NavLink } from 'react-router-dom'
import { SNavLink } from 'components'

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
    {/*<SNavLink activeClassName={'active'} exact to="/">
      Home
    </SNavLink>
    <SNavLink activeClassName={'active'} to="/resume">
    Resume
  </SNavLink> */}
    <SNavLink activeClassName={'active'} to="/portfolio">
      Portfolio
    </SNavLink>
    <SNavLink activeClassName={'active'} to="/about">
      About
    </SNavLink>
    <SNavLink activeClassName={'active'} to="/contact">
      Contact
    </SNavLink>
  </div>
)

export default NavBar
