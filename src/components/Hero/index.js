 import React from 'react';
 
import { Container } from './styles';
import SliderHome from '../SliderHome';
const Hero = (props) => {
    return (
        <Container>
            <div className="text">  
                <div className="text-container">      
                    <h2>{props.title}</h2> 
                    <p>{props.subtitle}</p>
                </div>  
            </div>
            <SliderHome />
        </Container>
    )
};
 
 export default Hero;
 