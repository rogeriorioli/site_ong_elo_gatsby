import React from 'react';

import * as  S from './styles';
import Link from 'gatsby-link'
export default function ListActions() {
  const actions = [
      {
        id :  Math.random(),
        name : 'Natal Elo',
        description : 'Iremos distribuir Panetones e Brinquedos para moradores de rua (adultos e crianças) e vamos receber as doações até o dia 13/12.',
        data : '14/12/2019 e 24/12/2019',
        local : '/doacoes'
      },
  ]
  return (
    <S.ListAction>
        {actions.map(events => {
          return(
          <li key={events.id}> 
            <h3>{events.name}</h3>
            <div>
              <small>{events.data}</small> 
            </div> 
            <p>{events.description}</p>
            <Link to={events.local}>
                Como ajudar
            </Link>
        </li>
          )
        })}
        {actions.length <= 1 ? <p>em breve mais datas</p> : ''}
        
    </S.ListAction>
  );
}
