import React from 'react'
import { DesktopNavBar, MobileNavBar, Logo, IconContainer, SHeaderContainer } from 'components'
import { history } from 'lib'

const HeaderContainer = () => (
  <SHeaderContainer location={history.location}>
    <DesktopNavBar />
    <MobileNavBar />
    <Logo />
    <IconContainer />
  </SHeaderContainer>
)

export default HeaderContainer
