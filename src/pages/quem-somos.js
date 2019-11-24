import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionNewsletter from "../components/SectionNewsletter"
import TitlePage from "../components/TitlePage/Iindex"
import CardMember from "../components/CardMember"
import Title from "../components/Title/"
import SectionParceiros from "../components/SectionParceiros"
const QuemsomosPage = () => (
  
  <Layout>
    <SEO title="Quem Somos" />
    <main>
      <TitlePage title="Quem Somos" />
      <div className="container">
        <article>
          <p>A Elo - Conectando Histórias, Tranformando Vidas, surgiu de um sonho! Rani, Jheni, Caca, Biel e Edu, amigos que se conectaram por uma causa comum, fazer a diferença na vida das pessoas.</p>
          <p>
          De um lado um grupo de amigos dispostos a impactar vidas e conectar mundos distantes e antagônicos, buscando diminuir a desigualdade entre os indivíduos providos de oportunidades. Do outro lado, os indivíduos que sobrevivem aquém destas oportunidades.</p>

          <Title title="Idealizadores" />
          <CardMember/>
        </article>
      </div>
      <SectionNewsletter/>
      <SectionParceiros/>
    </main>
  </Layout>

)

export default QuemsomosPage
