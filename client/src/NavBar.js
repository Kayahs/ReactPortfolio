import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  containerDiv: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  linkBox: {
    color: '#FFF',
    border: '1px solid #399BDB',
    padding: '5% 0',
    width: '100%',
    textDecoration: 'none',
    fontSize: '30px',
  },
}

const NavBar = () => (
  <div style={styles.containerDiv}>
    <Link style={styles.linkBox} to="/">
      Home
    </Link>
    <Link style={styles.linkBox} to="/about">
      About
    </Link>
    <Link style={styles.linkBox} to="/portfolio">
      Portfolio
    </Link>
  </div>
)

export default NavBar
