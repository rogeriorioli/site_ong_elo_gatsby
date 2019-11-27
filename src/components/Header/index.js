import { Link } from "gatsby"
import React, { useState} from "react"
import Image from './image'
import * as S from './styles'
import {MdMenu , MdClose} from 'react-icons/md'


function Header(props) { 
  const [open , setOpen] = useState(false);

function handleOpen() {
  setOpen(!open !== false ? true : false)
}

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
    label : 'Doações',
    link : '/doacoes'
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
          <button onClick={handleOpen}>
            {open !== true ? <MdMenu  size={36} color="#871955"/> : <MdClose size={36} color="#871955"/> }
          </button>
            <nav className={open !== true ? 'close' : 'open'}>
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
