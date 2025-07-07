'use client'

import React from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const index = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>

        <a href="/"><img className={styles.logo} src="/logos/logo.svg" alt="Logo" /></a>

        <button className={styles.top} onClick={topFunction}><FontAwesomeIcon icon={faAngleUp} className={'fas fa-angle-up'} /> Topo</button>

      </div>
    </div>
  )
}

export default index