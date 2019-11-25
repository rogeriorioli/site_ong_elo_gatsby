import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CardAction from "../CardAction"


const SectionInverno = () => (
  <StaticQuery
    query={graphql`
      query inverno {
        source: allFile(filter: { absolutePath: { regex: "/inverno/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
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
export default SectionInverno