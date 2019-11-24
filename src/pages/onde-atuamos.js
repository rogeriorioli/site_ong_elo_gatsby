import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionNewsletter from "../components/SectionNewsletter"
import TitlePage from "../components/TitlePage/Iindex"
import CardMember from "../components/CardMember"
import Title from "../components/Title/"
import SectionParceiros from "../components/SectionParceiros"
const OndeAtuamosPage = () => (
  
  <Layout>
    <SEO title="Onde Atuamos" />
    <main>
      <TitlePage title="Onde Atuamos" />
      <div className="container">
        <article>
        <p>Elo: relação existente entre pessoas ou coisas; conexão, vinculação, união. Os significados do substantivo coincidem com os objetivos buscados pela ELO. Aproximando empresas, instituições e pessoas com forte senso humanitário e social, buscamos oferecer suporte para a preparação e consequente inserção no mercado de trabalho de jovens e adultos em situação de vulnerabilidade.</p>
        
        <p>A criação da conexão que aproxima pessoas socialmente vulneráveis e pessoas socialmente menos desfavorecidas para a construção de um mundo melhor é o principal objetivo da ELO. </p>

        <p>
        Os detalhes fazem toda a diferença nesse caminho de transformações e evolução. Por isso a ELO realiza ações pontuais onde nossos voluntários e parceiros entregam um pouco de si e recebem muito, afinal, acreditamos que a gratidão de quem recebe um benefício é infinitamente menor que o prazer daquele de quem o faz.
        </p>
        </article>
      </div>
    </main>
  </Layout>

)

export default OndeAtuamosPage
