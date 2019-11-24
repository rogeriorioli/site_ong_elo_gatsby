import React from 'react';

import * as S from './styles';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import {ButtonLeft, ButtonRight} from '../ButtonLeft'

const settings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    prevArrow  : <ButtonLeft/>,
    nextArrow  : <ButtonRight/>
  };
  const SliderHome = () => (    
      
  <StaticQuery
    query={graphql`
      query sliderHome {
        source: allFile(filter: { absolutePath: { regex: "/slidehome/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
        <S.SliderHero>
        <Slider {...settings}>
        {data.source.edges.map(({ node }, i) => (
          <div key={i}>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        ))}
         </Slider>
        </S.SliderHero>
    )}
  />
)
export default SliderHome