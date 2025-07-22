import React from 'react'
import styles from './styles.module.css'

const index = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.title} />

      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <img className={styles.professor} src={props.photo} alt={props.title} />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default index