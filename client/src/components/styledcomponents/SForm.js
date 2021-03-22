import styled from 'styled-components'

const SForm = styled.form`
  background: ${(props) => props.theme.formbg};
  min-height: 400px;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (min-width: 426px) {
    padding: 48px 40px 36px;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`

export default SForm
