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
    background : rgba(255,255,255,.8);
`
export const Container = styled.div`
       max-width: 1140px;
       display : flex;
       margin : auto;
       font-family: 'Quicksand', sans-serif;
       align-items: center;
       justify-content: space-between;
       @media screen and (max-width: 780px){ 
            padding : 0 15px;
       }

`;
export const Logo = styled.div`
    width : 100px;
    img {
        max-width : 200px;
        height : 125px
    }
`

export const MenuIcon = styled(Menu)`
        @media screen and(max-width: 7680px){
            fill : #000;
            display : block;
        }
`
export const MenuWrapper = styled.div`
            button {
                display :none;
                @media screen and (max-width: 780px){ 
                    display :block;
                }
            }
        nav{
            @media screen and (max-width: 780px){ 
                button {
                    display :block;
                }
                &.close {
                    display : none;
                }
                &.open {
                    display : block;
                }
            }
            ul {
                list-style : none;
                padding : 0;
                @media screen and (max-width: 780px){ 
                    position: absolute;
                    width: 100%;
                    left: 0;
                    text-align: center;
                    top: 80px;
                    background: rgba(255,255,255,0.8);
                }
            }
            li {
                padding : 10px ;
                display:  inline-block;
                font-size : 12px;
                @media screen and (max-width: 780px){ 
                   padding : 15px ;
                   display : block;
                }
                a {
                    color : #871955;
                    font-weight : bold;
                    text-transform : uppercase;
                    font-family: sans-serif;
                    text-decoration : none;
                    &[aria-current="page"]{
                        color :#ff2f5a;
                    }
                    @media screen and (max-width: 780px){ 
                             font-size : 18px;
                        }
                }
            }
            
        }

`