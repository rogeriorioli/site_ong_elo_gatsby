import styled from 'styled-components';

export const SliderHero = styled.div`
    width : 50%;
    height : 600px;
    .gatsby-image-wrapper{
        height : 600px !important;
        img {
            object-fit : cover !important;
            object-position : bottom;
        }
    }
    button  {
        top :  400px;
        left: 0px;
        height : 80px;
        background : #fafafa;
        &:first-child {
            left: -70px;
        }
    }
`;
