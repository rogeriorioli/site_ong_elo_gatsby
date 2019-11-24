import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    width : 100%;
    overflow: hidden;
    height : 500px;
    .text {
        width : 50%;
        padding-left: 12%;
        display: flex;
        align-items: center;
        &-container{
            h2{
                color : #871955;
                font-size : 32px;
                margin : 20px 0;
                font-weight : 700;
                line-height: 1.4;

            }
            p{
                color : #666;
                font-size : 20px;
                width : 80% !important;
            }
        }
    }  
`;
