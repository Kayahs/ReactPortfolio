import styled from 'styled-components'

const SMobileNavBar = styled.div`
  text-align: center;
  width: 30%;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;

  @media only screen and (min-width: 992px) {
    display: none;
  }
`

export default SMobileNavBar
