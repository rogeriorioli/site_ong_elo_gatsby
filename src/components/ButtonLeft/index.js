import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from  'react-icons/md'

import * as S from './styles';


export function ButtonLeft(props) {
  const { onClick }  = props
  return (
    <S.ButtonLeft>
         <MdKeyboardArrowLeft size={30} color="#ff2f5a" onClick={onClick}/>
      </S.ButtonLeft>
  );
}

export function ButtonRight(props) {
  const { onClick }  = props
  return (
    <S.ButtonLeft>
         <MdKeyboardArrowRight size={30} color="#ff2f5a" onClick={onClick}/>
      </S.ButtonLeft>
  );
}
