import React from 'react';

import { Container } from './styles';

import Title from '../Title';
import CardPartner from '../CardPartners';

export default function SectionParceiros() {
  return (
    <Container>
        <div className="container">
        <Title title="Nossos Parceiros"/>
            <p>
                Empresas e pessoas que acreditam na transformação
            </p>
          <CardPartner/>  
        </div>
    </Container>
  );
}
