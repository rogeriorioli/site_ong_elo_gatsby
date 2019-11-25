import React from 'react';
import { Container } from './styles';
import Img from "gatsby-image"


export default function CardAction(props) {
  return (
    <Container>
        <div className="card-action" key={props.key}>
            <Img fluid={props.image}/>
        </div>
    </Container>
  );
}
