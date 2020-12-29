import React from 'react'
import { NavBar, Logo, IconContainer, SHeaderContainer } from 'components'
import { history } from 'lib'

const HeaderContainer = () => (
  <SHeaderContainer location={history.location}>
    <NavBar />
    <Logo />
    <IconContainer />
  </SHeaderContainer>
)

export default HeaderContainer
