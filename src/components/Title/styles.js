import styled from 'styled-components';

export const Title = styled.h2`
        text-align : center;
        color : #871955;
        display : block;
        margin : 40px 0;
        font-size : 36px;
        font-weight : 700;
        position: relative;
        &::after{
            content : '';
            position : absolute;
            width : 150px;
            height : 3px; 
            bottom : -20px;
            background: #ff295a;
            left : 0;
            right : 0;
            margin :auto;

        }
`;
