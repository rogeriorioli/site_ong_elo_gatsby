import styled from 'styled-components';

export const SliderAction = styled.div`
    .gatsby-image-wrapper{
        height : 600px !important;
        img {
            object-fit : contain !important;
            object-position : bottom;
        }
        .slick-arrow {
            &:before {
                    color : red;
                }
        }
    }
`;
