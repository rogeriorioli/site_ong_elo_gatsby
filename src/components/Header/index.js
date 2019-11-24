import { Link } from "gatsby"
import React from "react"
import Image from './image'
import * as S from './styles'

const Header = () => { 

  const menu = [
    {
      label : 'Home',
      link : '/'
     },
    {
    label : 'quem somos',
    link : '/quem-somos'
   },
   {
    label : 'Onde atuamos',
    link : '/onde-atuamos'
   },
   {
    label : 'Noticias',
    link : '/noticias'
   },
   {
    label : 'Contato',
    link : '/contato'
   },
]
return (
<>
  <S.HeaderWrapper>
    <S.Container>
        <S.Logo>  
          <Image/>
        </S.Logo>
        <S.MenuWrapper>
          <nav>
            <ul>
              {menu.map(list => (<li key={list.label}> <Link to={list.link}>{list.label}</Link></li>))}
            </ul>
          </nav>
        </S.MenuWrapper>
     </S.Container>
  </S.HeaderWrapper>

</>     
)
}


export default Header
