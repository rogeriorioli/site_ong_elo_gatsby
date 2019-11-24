import React from 'react';

import { Container } from './styles';
import Title from '../Title';
import SliderAction from '../SliderAtuacao';
import ListActions from '../ListActions';

export default function SectionAtuacao() {
  return (
        <Container>
            <div className="container">
            <Title title="Proximas Ações"/>
            <p>
                Confira nossas proximas atuações 
            </p>
            <div className="row">
                <div className="col">
                <SliderAction/>
                </div>
                <div className="col">
                    <ListActions />
                </div>
            </div>
        </div>
    </Container>
  );
}
