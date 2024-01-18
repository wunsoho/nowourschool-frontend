import styled from 'styled-components';

export const ArrowContainer = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  ${({ right }) => (right ? 'right: 0;' : 'left: 0;')}
  z-index: 1; /* Ensure it appears above the image */
`;  

export const TextContainer = styled.div`
  width : 70vw;
  margin-left : 10px;
  margin-top : 10px;
`
export const TitleText = styled.div`
  font-size : 18px;
  font-weight : bold;
`
export const Number = styled.div`
  font-weight : bold;
`
export const Time = styled.div`
  margin-top : 10px;
  font-size : 13px;
  color : #626262;
`
export const All = styled.div`
  display : flex;
`
export const StarRateWrap = styled.div`
  margin-top : 15px;
  margin-left : 70px;
  width: 100%;
  .star_icon {
    display: inline-flex;
    margin-right: 1px;
  }
`
export const ReviewButton = styled.div`
  margin-top : 25px;
  .button1 {
    border: none;
    background-color : #ffffff;
  }
`
export const StarText = styled.div`
  display : inline-block;
  margin-left : 3px;
  font-size : 13px;
  color : #FFBE55;
`
export const ReviewWrap = styled.div`
  width : 40vw;
` 
export const ImageSlider = styled.div`
`

export const ReviewSilder = styled.div`
  margin-top : 20px;
  .review-slide{
    padding : 10px;
    height : 13vh;
    border: 1px solid #ccc;
    box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px; 
    overflow: hidden; 
    margin: 0 5px; 
  }
`
export const ReviewDate = styled.div`
  font-size : 13px;
  color : #B1B1B1;
`
export const ReviewInfo = styled.div`
`
export const StarRateWrap2 = styled.div`
  margin-left : 120px;
  margin-bottom : 15px;
  width: 100%;
  .star_icon {
    display: inline-flex;
    margin-right: 1px;
  }
`

export const ReviewContainer = styled.div`
`

export const ReviewDetail = styled.div`
  font-size : 13px;
  margin-top : 10px;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }
`

export const MapInfo = styled.div`
  margin-top : 18px;
`
export const DetailTitle = styled.div`
  margin-left : 15px;
  font-size : 15px;
  color : #B1B1B1;
`
export const DetailContent = styled.div`
  margin-left : 15px;
  margin-top : 8px;
  font-size : 13px;
`
export const Map = styled.div`
  margin-top : 10px;
`
export const LocationData = styled.div`
`
export const DataContainer = styled.div`
  margin-top : 20px;
`
export const Button1 = styled.div`
  width : 191px;
  height : 42px;
  font-size : 15px;
  border: 1px solid #1FBC70;
  border-radius: 20px;
  text-align : center;
  display: flex;
  align-items: center;
  justify-content : center; 
`
export const Button2 = styled.div`
  margin-left : 10px;
  width : 191px;
  height : 42px;
  font-size : 15px;
  color : #FFFFFF;
  background-color : #1FBC70;
  border-radius: 20px;
  text-align : center;
  display: flex;
  align-items: center;
  justify-content : center;  
`
export const ButtonContainer = styled.div`
  display : flex;
  margin-top : 50px;
  margin-left : 15px;
  margin-bottom : 40px;
  `