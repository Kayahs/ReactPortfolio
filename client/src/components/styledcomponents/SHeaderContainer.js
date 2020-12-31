import styled from 'styled-components'

const SHeaderContainer = styled.div`
  width: 100%;
  position: ${(props) => (props.location.pathname === '/' ? 'fixed' : 'relative')};
  display: flex;
  margin: auto;
  background-color: ${(props) =>
    props.location.pathname === '/' ? 'rgb(255, 255, 255, 0.5)' : 'none'};
`

export default SHeaderContainer
