import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import SectionAbout from "../components/SectionAbout"
import SectionAtuacao from "../components/SectionAtuacao"
import SectionNewsletter from "../components/SectionNewsletter"
import SectionParceiros from "../components/SectionParceiros"


const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <Hero title="Conectando Histórias, Transformando Vidas" subtitle="Um sonho! de amigos que se conectaram por uma causa comum, fazer a diferença na vida das pessoas."/>
    <main>
      <SectionAbout/>
      <SectionAtuacao/>
      <SectionNewsletter/>
      <SectionParceiros/>
    </main>
  </Layout>
</>
)

export default IndexPage
