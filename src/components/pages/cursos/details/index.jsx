'use client'

import React from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faStar, faAsterisk } from '@fortawesome/free-solid-svg-icons';

const detalhes = [
  {
    id: 1,
    title: "Emergências Médicas",
    subtitle: "Imersão em Avaliação Pré-Clínica e Manejo de Emergências Médicas em Odontopediatria (EMODPED) (MEC)",
    description: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh. Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.",
    points: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    reviews: [
      {
        name: "Dr. Aluno Matriculado",
        ocupation: "Ortodontista, São Paulo",
        comment: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. ",
        rating: 5
      },
      {
        name: "Dr. Aluno Matriculado",
        ocupation: "Ortodontista, São Paulo",
        comment: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. ",
        rating: 5
      },
    ],
  },
  {
    id: 2,
    title: "Emergências Médicas",
    subtitle: "Imersão em Avaliação Pré-Clínica e Manejo de Emergências Médicas em Odontopediatria (EMODPED) (MEC)",
    description: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh. Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.",
    points: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    reviews: [
      {
        name: "Dr. Aluno Matriculado",
        ocupation: "Ortodontista, São Paulo",
        comment: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. ",
        rating: 5
      },
      {
        name: "Dr. Aluno Matriculado",
        ocupation: "Ortodontista, São Paulo",
        comment: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. ",
        rating: 5
      },
    ],
  },
  {
    id: 3,
    title: "Analgesia Relativa ou Sedação Consciente",
    subtitle: "Imersão em Avaliação Pré-Clínica e Manejo de Emergências Médicas em Odontopediatria (EMODPED) (MEC)",
    description: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh. Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.",
    points: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    reviews: [
      {
        name: "Dr. Aluno Matriculado",
        ocupation: "Ortodontista, São Paulo",
        comment: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. ",
        rating: 5
      },
      {
        name: "Dr. Aluno Matriculado",
        ocupation: "Ortodontista, São Paulo",
        comment: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. ",
        rating: 5
      },
    ],
  },
]

const index = (props) => {

  return (
    <div className={styles.container}>

      <div className={styles.nav}>
        <button onClick={() => props.setCurso(0)}><FontAwesomeIcon icon={faAngleLeft} /> Voltar</button>

        {detalhes.map((item) => {
          if (item.id !== props.curso) {
            return <button key={item.id} onClick={() => props.setCurso(item.id)}>{item.title}</button>
          }
        })}
      </div>

      <div className={styles.details}>
        <div className={styles.title}>
          <h2>{detalhes[props.curso - 1].title}</h2>
          <h3>{detalhes[props.curso - 1].subtitle}</h3>
        </div>
        

        <button>Matricule-se</button>

        <p>{detalhes[props.curso - 1].description}</p>

        <div className={styles.points}>
          {detalhes[props.curso - 1].points.map((point, index) => (
            <p key={index}><FontAwesomeIcon icon={faAsterisk} /> {point}</p>
          ))}
        </div>
      </div>

      <div className={styles.reviews}>

        {
          detalhes[props.curso - 1].reviews.map((item, index) => {
            return (
              <div className={styles.review} key={index}>
                <div className={styles.rating}>
                  {[...Array(item.rating)].map((_, index) => (
                    <span key={index}><FontAwesomeIcon icon={faStar} /></span>
                  ))}
                </div>

                <div className={styles.user}>
                  <h3>{item.name}</h3>
                  <p className={styles.ocupation}>{item.ocupation}</p>
                </div>
                
                <p>{item.comment}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default index