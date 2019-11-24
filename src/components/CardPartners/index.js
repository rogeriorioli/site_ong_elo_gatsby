import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as S from "./styles"
import Img from "gatsby-image"

const CardPartner = () => (
  <StaticQuery
    query={graphql`
      query parceiros {
        source: allFile(filter: { absolutePath: { regex: "/parceiros/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <S.CardsWrapper>
        {data.source.edges.map(({ node }, i) => (
          <S.CardContainer key={i}>
            <Img fluid={node.childImageSharp.fluid} />
          </S.CardContainer>
        ))}
      </S.CardsWrapper>
    )}
  />
)
export default CardPartner
