import React from 'react';

import * as S from './styles';
import { Link } from 'gatsby';

export default function Button(props) {
  return (
    <S.ButtonContainer>
        <Link to={props.url} title={props.title} > {props.title} </Link>
    </S.ButtonContainer>
  );
}
