import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.container} id='contato'>
      <div className={styles.content}>

        <div className={styles.contactForm}>
          <h2>Contato</h2>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name='email' required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" placeholder="Telefone" name='telefone' required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea placeholder="Mensagem" rows={4} name='mensagem' required></textarea>
          </div>
          
          
          
          <button>Enviar</button>
          
        </div>

        <img src="/images/contact.svg" alt="contact" />

      </div>
    </div>
  )
}

export default index