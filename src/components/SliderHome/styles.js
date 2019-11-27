import styled from 'styled-components';

export const SliderHero = styled.div`
    width : 50%;
    height : 600px;
    @media screen and (max-width:768px){
        width : 100%;
        position :relative ;
        .slick-slider{

        &:after {
            width : 100%;
            height : 100%;
            background: rgba(0,0,0,0.7);
            content : '';
            left : 0;
            top :0;
            position: absolute;
            z-index: 7;
            }
        }

    }
    .gatsby-image-wrapper{
        height : 600px !important;
        img {
            object-fit : cover !important;
            object-position : bottom;
        }
    }
    button  {
        top :  408px;
        left: 0px;
        height : 80px;
        background : #fafafa;
        z-index : 9;
        @media screen and (max-width: 768px){
                  right: 0 !important;
                  left : inherit;
                  top : 550px;
            }
        &:first-child {
            left: -70px;
            z-index : 9;
            @media screen and (max-width: 768px){
                right: 70px !important;
                left : inherit;
                
            }
        }
    }
`;
