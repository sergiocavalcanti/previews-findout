import React from 'react'
import styles from './styles.module.css'
import Course from './professor'

const index = () => {

  const professores = [
    {
      id: 1,
      title: "Professor 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      image: "/images/curso1.svg"
    },
    {
      id: 2,
      title: "Professor 2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      image: "/images/curso3.svg"
    }
  ]


  return (
    <div className={styles.container}>

      <div className={styles.content}>
        {
          professores.map((professor) => {
            return <Course key={professor.id} {...professor} />
          })
        }
      </div>

    </div>
  )
}

export default index