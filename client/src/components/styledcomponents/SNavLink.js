import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SNavLink = styled(NavLink)`
  color: #000;
  width: 100%;
  text-decoration: none;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    color: #399bdb;
    border-bottom: 5px solid #399bdb;
  }

  &.drawerLink {
    margin: 5%;
  }
`

export default SNavLink
