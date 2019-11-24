import React from 'react';

import { Container } from './styles';
import Title from '../Title';
import Mailchimp from 'react-mailchimp-form'

export default function SectionNewsletter() {
  return (
    <Container>
        <div className="container">
            <Title title="Receba Novidades da Elo "/>
            <p>
                Cadastre-se e saiba mais sobre nossas atividades
            </p>
            <div className="row">
            <Mailchimp
                action='https://designhope.us9.list-manage.com/subscribe/post?u=7c43898a9a22232213aa7b10b&amp;id=4ef0dfb287'
                fields={[
                {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                }
                ]}
                messages = {
                    {
                      sending: "Enviando",
                      success: "Muito Obrigado por sua Inscrição",
                      error: "Humm aconteceu algo inesperado",
                      empty: "Você precisa preencher com seu email",
                      duplicate: "Olha só você já está inscrito , ebaaa",
                      button: "Cadastar"
                    }
                }
             />
            </div>
        </div>
    </Container>
  );
}
