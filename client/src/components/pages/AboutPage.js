import React from 'react'
import { SAboutContainer, SAboutText, SAboutSection, SProfileImage } from 'components'

const AboutPage = () => (
  <SAboutContainer>
    <SAboutSection>
      <SProfileImage src="./assets/images/profile.jpg" />
    </SAboutSection>
    <SAboutSection>
      <SAboutText>
        I am an experienced Full Stack Developer with a passion for media in many different forms. I
        love reading, watching movies and playing games. If you leave me alone long enough you will
        probably find me doing one of those things. I also love solving problems. The experience of
        looking at a problem, breaking it down and solving it piece by piece has always been
        rewarding and enjoyable. I also love to challenge myself so I am looking for ways to improve
        my code and skills at every oppurtunity.
      </SAboutText>
    </SAboutSection>
  </SAboutContainer>
)

export default AboutPage
