import React from 'react'
import { SNavLink, SDesktopNavBar } from 'components'

const DesktopNavBar = () => (
  <SDesktopNavBar>
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
  </SDesktopNavBar>
)

export default DesktopNavBar
