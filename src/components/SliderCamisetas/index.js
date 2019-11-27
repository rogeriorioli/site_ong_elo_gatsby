import React from 'react';

import * as S from './styles';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import {ButtonLeft, ButtonRight } from '../ButtonLeft';

export const settings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    prevArrow  : <ButtonLeft/>,
    nextArrow  : <ButtonRight/>
  };
  const SliderAction = () => (    
      
  <StaticQuery
    query={graphql`
      query camisetas {
        source: allFile(filter: { absolutePath: { regex: "/camisetas/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight : 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <S.SliderAction>
        <Slider {...settings}>
        {data.source.edges.map(({ node }, i) => (
          <div key={i}>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
         </Slider>
        </S.SliderAction>
    )}
  />
)
export default SliderAction