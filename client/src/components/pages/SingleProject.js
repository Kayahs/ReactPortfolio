import React from 'react'
import {
  SPortfolioListElement,
  SPortfolioText,
  SPortfolioImageContainer,
  SPortfolioImage,
  SPortfolioTitle,
  SPortfolioDescription,
  SPortfolioTech
} from 'components'

const SingleProject = ({ pname, desc, tech }) => {
  return (
    <SPortfolioListElement>
      <SPortfolioText>
        <SPortfolioTitle>{pname}</SPortfolioTitle>
        <SPortfolioDescription>
          <strong>Description:</strong> {desc}
        </SPortfolioDescription>
        <SPortfolioTech>
          <strong>Technologies Used:</strong> {tech.join(', ')}
        </SPortfolioTech>
      </SPortfolioText>
      <SPortfolioImageContainer>
        <SPortfolioImage src={`./assets/images/${pname}.png`} />
      </SPortfolioImageContainer>
    </SPortfolioListElement>
  )
}

export default SingleProject
