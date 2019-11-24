import styled from 'styled-components';
import {Menu} from 'styled-icons/feather/Menu'
export const HeaderWrapper= styled.header`
    display : block;
    height : 80px;
    position : fixed;
    z-index : 99999;
    padding : 10px 0;
    width : 100%;
    top : 0;
    background : rgba(255,255,255,.7);
`
export const Container = styled.div`
       max-width: 1140px;
       display : flex;
       margin : auto;
       font-family: 'Quicksand', sans-serif;
       align-items: center;
       justify-content: space-between;

`;
export const Logo = styled.div`
    width : 100px;
    img {
        max-width : 200px;
        height : 125px
    }
`

export const MenuIcon = styled(Menu)`
        fill : #000;
        display : none;
`
export const MenuWrapper = styled.div`
        nav{
            ul {
                list-style : none;
                padding : 0;
            }
            li {
                padding : 10px ;
                display:  inline-block;
                font-size : 12px;
                a {
                    color : #871955;
                    font-weight : bold;
                    text-transform : uppercase;
                    font-family: sans-serif;
                    text-decoration : none;
                    &[aria-current="page"]{
                        color :#ff2f5a;
                    }
                }
            }
           
        }

`