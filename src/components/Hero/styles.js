import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    width : 100%;
    overflow: hidden;
    height : 500px;
    @media screen and (max-width: 780px){ 
       display : initial;   
     }
    .text {
        width : 50%;
        padding-left: 12%;
        display: flex;
        align-items: center;
        @media screen and (max-width: 780px){ 

        }
       
        &-container{
            h2{
                color : #871955;
                font-size : 32px;
                margin : 20px 0;
                font-weight : 700;
                line-height: 1.4;
                @media screen and (max-width: 780px){ 
                    color : #fff !important;
                }

            }
            p{
                color : #666;
                font-size : 20px;
                width : 80% !important;
                @media screen and (max-width: 780px){ 
                    color : #fff !important;
                }

            }
        }
        
    } 
    @media screen and (max-width: 780px){ 
            .text {
                display : block;
                width : 100%;
                position: absolute;
                z-index: 9;
                padding: 36% 6%;
            }
            }
`;
