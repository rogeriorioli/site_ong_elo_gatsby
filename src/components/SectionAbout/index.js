import React from 'react';

import { Container } from './styles';
import CardMember from '../CardMember';

import Button from '../Button';
import Title from '../Title';
export default function SectionAbout(data) {
  return (
    <Container>
        <Title title="Quem Somos"/>
        <p>Um grupo de amigos ( Rani, Caca, Edu e Biel ) dispostos a impactar vidas <br/>e conectar mundos distantes e antagônicos
        </p>
        <div className="container">
        <CardMember />
        <Button url="/" title="saiba mais"/>
        </div>
     </Container>
  );
}
