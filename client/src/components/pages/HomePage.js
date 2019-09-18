import React from 'react'

const styles = {
  containerDiv: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  fname: {
    fontSize: '120px',
    paddingTop: '10%',
    lineHeight: '50px',
  },
  lname: {
    fontSize: '120px',
    paddingBottom: '2%',
  },
  title: {
    fontSize: '50px',
    paddingTop: '5%',
  },
}

const HomePage = () => {
  return (
    <div style={styles.containerDiv}>
      <div style={styles.fname}>Akshay</div>
      <div style={styles.lname}>Manchanda</div>
      <div style={styles.title}>Full Stack Developer</div>
    </div>
  )
}
export default HomePage
