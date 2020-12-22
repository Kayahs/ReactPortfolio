import React from 'react'
import { NavBar, Logo, IconContainer } from 'components'

const styles = {
  headerDiv: {
    width: '100%',
    display: 'flex',
    margin: 'auto',
    maxHeight: ''
  }
}

const HeaderContainer = () => (
  <div style={styles.headerDiv}>
    <NavBar />
    <Logo />
    <IconContainer />
  </div>
)

export default HeaderContainer
