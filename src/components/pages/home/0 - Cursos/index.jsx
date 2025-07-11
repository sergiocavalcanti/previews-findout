'use client'

import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Details from './details'

const index = () => {

  const [curso, setCurso] = useState(0)

  return (
    <div className={styles.container}>

      <section className={`${styles.hero} ${curso != 0 ? styles.mobile : ''}`}>
        <div className={`${styles.slice} ${styles['slice-1']} ${curso == 1 ? styles.active : ''} ${curso !== 1 && curso !== 0 ? styles.inactive : ''}`} >
          {curso == 1 ?  
            <Details curso={curso} setCurso={setCurso} />
          :
            <div className={styles.overlay}>
              <h2><span className={styles.check}><FontAwesomeIcon icon={faCheck} /></span> Emergências Médicas</h2>
              <button onClick={() => setCurso(1)}>Saiba mais</button>
            </div>
          }
        </div>
        <div className={`${styles.slice} ${styles['slice-2']} ${curso == 2 ? styles.active : ''} ${curso !== 2 && curso !== 0 ? styles.inactive : ''}`}>
          {curso == 2 ?  
            <Details curso={curso} setCurso={setCurso} />
          :
            <div className={styles.overlay}>
              <h2><span className={styles.check}><FontAwesomeIcon icon={faCheck} /></span> Emergências Médicas 2</h2>
              <button onClick={() => setCurso(2)}>Saiba mais</button>
            </div>
          }
        </div>
        <div className={`${styles.slice} ${styles['slice-3']} ${curso == 3 ? styles.active : ''} ${curso !== 3 && curso !== 0 ? styles.inactive : ''}`}>
          {curso == 3 ?  
            <Details curso={curso} setCurso={setCurso} />
          :
            <div className={styles.overlay}>
              <h2><span className={styles.check}><FontAwesomeIcon icon={faCheck} /></span> Analgesia Relativa ou Sedação Consciente</h2>
              <button onClick={() => setCurso(3)}>Saiba mais</button>
            </div>
          }
        </div>
      </section>


    </div>
  )
}

export default index