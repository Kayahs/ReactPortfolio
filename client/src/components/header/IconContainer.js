import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const styles = {
  iconDiv: {
    width: '30%',
    display: 'flex',
    // textAlign: 'center',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    fontSize: '25px',
    maxHeight: ''
  },
  icon: {
    margin: '5% 30px',
    color: 'black'
  }
}

const IconContainer = () => (
  <div style={styles.iconDiv}>
    <a style={styles.icon} href="https://github.com/Kayahs">
      <FaGithub />
    </a>
    <a style={styles.icon} href="https://www.linkedin.com/in/akshay-manchanda/">
      <FaLinkedin />
    </a>
  </div>
)

export default IconContainer
