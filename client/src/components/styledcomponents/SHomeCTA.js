import styled from 'styled-components'

const SHomeCTA = styled.div`
  margin: 30px auto 0;
  width: 75%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (min-width: 426px) {
    width: 100%;
    flex-direction: row;
  }
`

export default SHomeCTA
