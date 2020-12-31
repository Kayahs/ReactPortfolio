import React from 'react'
import {
  SHomeHeroContainer,
  SHomePage,
  SHomeHero,
  SHomeCTA,
  SHomeHeroTop,
  CTAButton
} from 'components'
import TypeIt from 'typeit-react'

const HomePage = () => {
  return (
    <SHomePage>
      <SHomeHeroContainer>
        <SHomeHero>
          <SHomeHeroTop>
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type("I'm Akshay Manchanda.")
                  .break({ delay: 500 })
                  .type("I'm a Front End Developer.")
                  .pause(500)
                  .delete(20)
                  .type('Back End Developer.')
                  .pause(500)
                  .delete(19)
                  .type('Full Stack Developer.')
                return instance
              }}
            />
          </SHomeHeroTop>
          <SHomeCTA>
            <CTAButton text="Come check out my work!" to="/portfolio" />
            <CTAButton text="Learn more about me..." to="/about" />
            <CTAButton text="Want to have a chat?" to="/contact" />
          </SHomeCTA>
        </SHomeHero>
      </SHomeHeroContainer>
    </SHomePage>
  )
}
export default HomePage
