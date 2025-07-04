import React from 'react'
import styles from './styles.module.css'
import Course from './course'

const index = () => {

  const courses = [
    {
      id: 1,
      title: "Emergências Médicas",
      description: "Imersão em Avaliação Pré-Clínica e Manejo de Emergências Médicas em Odontopediatria (EMODPED) (MEC)",
      image: "/images/curso1.svg"
    },
    {
      id: 2,
      title: "Emergências Médicas",
      description: "Imersão em Avaliação Pré-Clínica e Manejo de Emergências Médicas em Odontopediatria (EMODPED) (MEC)",
      image: "/images/curso2.svg"
    },
    {
      id: 3,
      title: "Analgesia Relativa ou Sedação Consciente",
      description: "Habilitação da Prática da Analgesia Relativa ou Sedação Consciente, com Óxido Nitroso (MEC/CFO) + Habilitação em Suporte Básico de Vida para Profissionais da Saúde (MEC/AHA)",
      image: "/images/curso3.svg"
    }
  ]


  return (
    <div className={styles.container}>

      <div className={styles.content}>
        {
          courses.map((course) => {
            return <Course key={course.id} {...course} />
          })
        }
      </div>

    </div>
  )
}

export default index