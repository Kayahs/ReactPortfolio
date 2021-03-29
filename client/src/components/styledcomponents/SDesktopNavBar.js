import styled from 'styled-components'

const SDesktopNavBar = styled.div`
  display: none;

  @media only screen and (min-width: 992px) {
    text-align: center;
    width: 30%;
    display: flex;
    justify-content: space-around;
    margin-right: auto;
  }
`

export default SDesktopNavBar
