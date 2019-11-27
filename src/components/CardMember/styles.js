import styled from 'styled-components';

export const CardsWrapper = styled.div`
    padding : 40px 0;
`

export const CardContainer = styled.div`
    width : 17%;
    border : 1px solid #ccc ;
    border-radius : 4px;
    padding : 10px;
    display : inline-block;
    margin : 1%;
    @media screen and (max-width: 780px){ 
        width : 99%;
    }

    .gatsby-image-wrapper{
        height : 295px;
        img{
            object-fit : center top !important;
        }
    }
`;
