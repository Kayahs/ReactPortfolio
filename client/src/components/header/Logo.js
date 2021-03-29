import { SLogo, SLogoLink } from 'components'
import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  logoDiv: {
    width: '40%',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px'
  }
}

const Logo = () => (
  <SLogo>
    <SLogoLink to="/">AM</SLogoLink>
  </SLogo>
)

export default Logo
