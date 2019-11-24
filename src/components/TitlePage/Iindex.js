import React from 'react';

import { Container } from './styles';

export default function TitlePage(props) {
  return (
    <Container>
          <div className="container">
             <h2>{props.title}</h2>
          </div>
    </Container>
  );
}
