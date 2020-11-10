import React from 'react'

const styles = {
  pageDiv: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  heroDiv: {
    width: '100%',
    alignSelf: 'flex-end'
  }
}

const HomePage = () => {
  return (
    <div style={styles.pageDiv}>
      <div style={styles.heroDiv}>
        <div>This is a test</div>
      </div>
    </div>
  )
}
export default HomePage
