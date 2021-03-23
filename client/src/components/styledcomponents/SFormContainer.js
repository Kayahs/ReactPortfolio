import styled from 'styled-components'

const SFormContainer = styled.div`
  background: ${(props) => props.theme.pgbg};
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 769px) {
    padding: 0 10%;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 20%;
  }
`

export default SFormContainer
