import React from 'react'

const styles = {
  listElement: {
    listStyle: 'none',
    display: 'flex',
    width: '100%',
  },
  portfolioText: {
    width: '50%',
  },
  imageContainer: {
    width: '50%',
  },
  portfolioImage: {
    width: '100%',
    objectFit: 'contain',
  },
  portfolioTitle: {
    fontSize: '40px',
    textAlign: 'center',
  },
  portfolioDesc: {
    fontSize: '30px',
  },
  portfolioTech: {
    fontSize: '20px',
  },
}

const SingleProject = ({ pname, desc, tech }) => {
  return (
    <li style={styles.listElement}>
      <div style={styles.portfolioText}>
        <h2 style={styles.portfolioTitle}>{pname}</h2>
        <p style={styles.portfolioDesc}>
          <strong>Description:</strong> {desc}
        </p>
        <p>
          <strong>Technologies Used:</strong> {tech.join(', ')}
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img style={styles.portfolioImage} src={`./assets/images/${pname}.png`} />
      </div>
    </li>
  )
}

export default SingleProject
