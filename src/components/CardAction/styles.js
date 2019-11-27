import styled from 'styled-components';

export const Container = styled.div`
    width : 23%;
    margin : 1%;
    display: inline-block;
    @media screen and (max-width : 768px){
            width : 48%;
    }
    .card-action {
        border :1px solid #ccc;
    }
`;
