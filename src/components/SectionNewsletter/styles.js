import styled from 'styled-components';

export const Container = styled.section`
    padding : 40px;
    background :#ff2f5a;
    h2 {
        color : #fff;
        &:after {
            background : #fff;    
        }
    }
    p{
        color : #fff;
        text-align : center;
        font-size : 18px;
    }
    .row {
        margin : 40px 0;
        width : 100%;
        display : flow-root;
    }
    .col {
        width : 48%;
        margin : 1%;
        display : inline-block;
        vertical-align : top;
    }
    .msg-alert{
        p{
         color : #fff !important;
        }
    }
    input {
        background : transparent ;
        position : relative;
        border-top : none;
        border-left : none;
        border-right : none;
        border-bottom : 1px solid #fff;
        outline : none;
        display : block;
        margin : auto;
        padding : 15px;
        width : 300px;
        color : #fff;
        font-size : 16px;
        &:focus {
            outline : none;
        }

        &::placeholder{
           color : #fff;     
        }
        }
        button {    
            color : #fff;
            text-transform : uppercase;
            font-weight : 500;
            background : transparent;
            display : block;
            padding : 15px;
            text-align: center; 
            border : 1px solid #fff;
            width : 200px;
            margin : 20px auto;
            &:disabled{
                opacity : .3;
            }
    }
  `