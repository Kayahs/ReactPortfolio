import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SIconContainer, SIcon } from 'components'

const IconContainer = () => (
  <SIconContainer>
    <SIcon href="https://github.com/Kayahs">
      <FaGithub />
    </SIcon>
    <SIcon href="https://www.linkedin.com/in/akshay-manchanda/">
      <FaLinkedin />
    </SIcon>
  </SIconContainer>
)

export default IconContainer
