import styled from 'styled-components';
import Slider from 'react-slick';

export const component = styled.div`
    background-color: #ffffff;
    margin-top: 20px;
`;
export const CustomSlider = styled(Slider)`
.slick-center {
    transform: scale(1.2); // 가운데 슬라이드 크기 조절
    transition: transform 0.5s;
}

.slick-slide {
    transition: transform 0.5s;
}
`;

export const img = styled.div`
    margin: 0 auto;
    display: inline-block;  
`;
export const GreenText = styled.span`
    color: green;
`;
export const Text = styled.div`
    margin-top : 20px;
    font-weight : bold;
`;

export const Tag = styled.div`
    margin-left : 10px;
`;
export const button = styled.div`
    display: inline-block;
    width : 40px;
    font-size : 8px;
    margin-top : 15px;
    margin-left : 20px;
    border-radius : 10px;
    text-align : center;
    border: 1px solid #ccc;
`;
export const container = styled.div`
    margin-top : 5px;   
`   