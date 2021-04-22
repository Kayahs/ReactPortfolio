import styled from 'styled-components'
import SPortfolioListELement from './SPortfolioListElement'

const SPortfolioText = styled.div`
  transition: all 0.5s;
  width: 80%;
  height: 80%;
  position: absolute;
  padding: 10% 10%;
  background-color: rgba(255, 255, 255, 0);
  display: none;

  :hover {
    display: block;
    background-color: rgba(255, 255, 255, 0.8);
  }

  ${SPortfolioListELement}:hover & {
    display: block;
  }
`

export default SPortfolioText
