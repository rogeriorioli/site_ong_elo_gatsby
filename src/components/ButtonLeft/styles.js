import styled from 'styled-components';

export const ButtonLeft = styled.button`
    background : #fff;
    border : none;
    position : absolute;
    bottom : -10px;
    padding : 20px;
    right : 90px;
    cursor: pointer;
    &:first-child {
        right: 160px;
        z-index: 8;
    }
`;
