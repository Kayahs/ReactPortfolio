import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SCTAButton = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  border: 2px solid #399bdb;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #fff;
  color: #399bdb;

  &:hover {
    background-color: #399bdb;
    border: 2px solid #fff;
    color: #fff;
  }

  @media only screen and (min-width: 426px) {
    width: 30%;
    margin: 0;
  }
`

export default SCTAButton
