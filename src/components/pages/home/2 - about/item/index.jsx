import React from 'react'
import styles from './styles.module.css'

const index = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.title} />

      <div className={styles.content}>
        <h2>{props.icon}</h2>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      
    </div>
  )
}

export default index