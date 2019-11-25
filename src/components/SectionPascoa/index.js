import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CardAction from "../CardAction"


const CardPartner = () => (
  <StaticQuery
    query={graphql`
      query pascoa {
        source: allFile(filter: { absolutePath: { regex: "/pascoa/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight : 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.source.edges.map(({ node }, i) => (

            <CardAction key={i} image={node.childImageSharp.fluid}/>
        ))}
      </>
    )}
  />
)
export default CardPartner