import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>

        <a href="/"><img className={styles.logo} src="/logos/logo.svg" alt="Logo" /></a>

        <ul className={styles.nav}>
          <li><a href="/">Cursos</a></li>
          <li><a href="/">Contato</a></li>
          <li><a href="/">Matricule-se</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default index