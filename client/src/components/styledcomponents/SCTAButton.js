import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SCTAButton = styled(NavLink)`
  width: 200px;
  text-decoration: none;
  border: 2px solid #399bdb;
  padding: 10px;
  background-color: #fff;
  color: #399bdb;

  &:hover {
    background-color: #399bdb;
    border: 2px solid #fff;
    color: #fff;
  }
`

export default SCTAButton
