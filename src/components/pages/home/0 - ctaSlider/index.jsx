'use client'

import React from 'react'
import styles from './styles.module.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const index = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slides = ["cta-1.svg", "cta-2.svg", "cta-3.svg"];

  return (
    <div className={styles.container}>

      <div className={styles.cta}>
        <h2>Transforme sua <br/> carreira odontológica</h2>
        <div className={styles.divider}></div>
        <h4>Cursos para profissionais que buscam excelência na prática clínica com segurança e inovação.</h4>
        <button>Saiba Mais</button>
      </div>

      <Slider {...settings}>

        {slides.map((slide, index) => (
          <img key={index} className={styles.slide} src={`/images/${slide}`} alt={`Slide ${index + 1}`} />
        ))}

      </Slider>
      
    </div>
  )
}

export default index