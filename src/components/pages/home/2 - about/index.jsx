import React from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHandHoldingHeart, faFlask } from '@fortawesome/free-solid-svg-icons';

import Item from './item';

const index = () => {

  const features = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faBook} />,
      image: "/images/square1.svg",
      title: "Conhecimento",
      description: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus."
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
      image: "/images/square2.svg",
      title: "Amor pelo que faz",
      description: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus."
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faFlask} />,
      image: "/images/square3.svg",
      title: "Experiência",
      description: "Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus."
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        {features.map((feature) => (
          <Item key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default index