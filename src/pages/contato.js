import React, { useState } from "react"
import axios from 'axios'
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitlePage from "../components/TitlePage/"
import SectionNewsletter from "../components/SectionNewsletter"

function ContatoPage() {
  const [contact, setContact] = useState({})
  const [resposta , setResposta] = useState(``)

  const getValues = e => {
    e.persist()
    e.preventDefault()
    setContact(contact => ({ ...contact, [e.target.name]: e.target.value, assunto : 'contato do site' }))
    
  }
  const sendContact = (e) => {
    e.preventDefault()
        axios.post('https://mailthis.to/rogeriorioli', contact).then(response => {
          window.location.href =  `https://mailthis.to/confirm?after=https://pistas-80269.firebaseapp.com/`
                    setResposta(response = 'contato enviado com sucesso')
        }).catch(err => {
          err = 'deu ruim'
        })
  }
  return (
    <Layout>
      <SEO title="Onde Atuamos" />
      <main>
        <TitlePage title="Contato" />
        <div className="container">
          <article>
            <div className="col">
              <h2>Fale Conosco</h2>
              <form onSubmit={sendContact}  encType="multipart/form-data">
                <input type="text" name="nome" placeholder="Seu Nome" onChange={getValues} required/>
                <input type="email" name="email" placeholder="seuemail@servidor.com.br"  onChange={getValues}  required/>
                <textarea placeholder="escreva sua mensagem" name="message"  onChange={getValues} required></textarea>
                <button type="submit">Enviar</button>
                {resposta}
              </form>
            </div>
            <div className="col"></div>
          </article>
        </div>
        <SectionNewsletter />
      </main>
    </Layout>
  )
}

export default ContatoPage
