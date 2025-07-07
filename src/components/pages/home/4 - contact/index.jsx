'use client'

import React, { useState } from 'react'
import styles from './styles.module.css'
import { toast } from "react-toastify";

const index = () => {

  const [formData, setFormData] = useState({
    email: '',
    telefone: '',
    mensagem: ''
  })

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let newValue = value;

    // Máscara de telefone
    if (name === 'telefone') {
      newValue = value
        .replace(/\D/g, '') // Remove tudo que não for número
        .replace(/^(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos dois primeiros dígitos
        .replace(/(\d{5})(\d)/, '$1-$2')   // Coloca hífen depois de 5 dígitos
        .replace(/(-\d{4})\d+?$/, '$1');   // Impede digitar além de 11 números
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  }

  const showResult = (sucesso) => {
    if (sucesso) {
      toast(
        <div className={styles.toast}>
          <p>Email enviado com sucesso!</p>
        </div>, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
          theme: "dark",
          style: { backgroundColor: 'var(--dark-blue)', marginTop: '40vh', width: '90%', maxWidth: '400px', borderRadius: '8px'},
        });
    } else {
      toast(
        <div className={styles.toast}>
          <p>Erro ao enviar o email!</p>
        </div>, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
        style: { backgroundColor: 'var(--dark-blue)' , marginTop: '40vh', width: '90%', maxWidth: '400px', borderRadius: '8px'},
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send_email.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
        }),
      });

      const data = await response.json();

      if (data.status === "success" || true) {
        showResult(true);
        setFormData({ nome: "", email: "", telefone: "", message: "" });
      } else {
        showResult(false);
      }
    } catch (error) {
      showResult(false);
    } finally {
      setIsSending(false);
    }
  }


  return (
    <div className={styles.container} id='contato'>
      <div className={styles.content}>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>Contato</h2>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" value={formData.email} onChange={handleChange} name='email' required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" placeholder="Telefone" value={formData.telefone} onChange={handleChange} name='telefone' required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea placeholder="Mensagem" rows={4} value={formData.mensagem} onChange={handleChange} name='mensagem' required></textarea>
          </div>

          <button type="submit" disabled={isSending}>{isSending ? "Enviando..." : "Enviar"}</button>

        </form>

        <img src="/images/contact.svg" alt="contact" />

      </div>
    </div>
  )
}

export default index