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
  <div style={styles.logoDiv}>
    <NavLink className="logoNav" to="/">
      AM
    </NavLink>
  </div>
)

export default Logo
