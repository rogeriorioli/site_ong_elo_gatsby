


import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-family: 'Quicksand', sans-serif;
    font-size: 100%;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  .container {
    max-width : 1140px;
    margin: auto;
  }
  footer {
    padding : 40px;
    background : #871955;
    color : #fff;
    a{
      color : #fff;
      text-decoration : none;
    }
    .col {
      width : 48%;
      margin : 1px ;
      display : inline-block;
      ul{
        text-align : right;
      }
      li {
        display: inline-block;
        text-align : right;
        margin : 0 5px;
        &:last-child {
          margin-right : 0;
        }
      }
    }
  }
  article {
    padding : 20px 0;
    p{
      font-size : 18px;
      line-height : 1.5;
         color : #666;
    }
    h2 {
        margin-top : 30px;
        color: #871955;
        display: block;
        font-size: 36px;
        font-weight: 700;
    }
  }
`
export default GlobalStyles