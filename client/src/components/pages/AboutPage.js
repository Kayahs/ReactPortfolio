import React from 'react'

const styles = {
  containerDiv: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  imgSection: {
    width: '50%'
  },
  aboutInfo: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  aboutText: {
    textAlign: 'justify',
    padding: '2% 5%',
    fontSize: '30px'
  },
  profileImage: {
    width: '100%',
    height: 'auto'
  },
  iconImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '300px'
  },
  icons: {
    margin: '0 auto',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  links: {
    width: '200px'
  }
}

const AboutPage = () => (
  <div style={styles.containerDiv}>
    <div style={styles.imgSection}>
      <img style={styles.profileImage} src="./assets/images/profile.jpg" />
    </div>
    <div style={styles.aboutInfo}>
      <div style={styles.aboutText}>
        I am an experienced Full Stack Developer with a passion for media in many different forms. I
        love reading, watching movies and playing games. If you leave me alone long enough you will
        probably find me doing one of those things. I also love solving problems. The experience of
        looking at a problem, breaking it down and solving it piece by piece has always been
        rewarding and enjoyable. I also love to challenge myself so I am looking for ways to improve
        my code and skills at every oppurtunity.
      </div>
      <div style={styles.icons}>
        <a style={styles.links} href="https://github.com/Kayahs/">
          <img style={styles.iconImage} src="./assets/icons/github.png" />
        </a>
        <a style={styles.links} href="https://www.linkedin.com/in/akshay-manchanda/">
          <img style={styles.iconImage} src="./assets/icons/linkedin.png" />
        </a>
      </div>
    </div>
  </div>
)

export default AboutPage
