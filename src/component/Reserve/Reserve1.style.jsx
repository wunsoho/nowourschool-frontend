import styled from 'styled-components';

export const Body = styled.div`
  overflow-x : hidden;
  max-width: 960px;
  width: 100%;
`
export const Back = styled.div`
    display : flex;
    margin-top : 20px;
    .Backbutton {
        background-color : #ffffff;
        border : none;
    }
    .title { 
        font-size : 20px;
        margin-left : 140px;
        font-weight : bold;
    }
`
export const DayTitle = styled.div`
    display : flex;
    margin-top : 15px;
    margin-left : 10px;
    .title { 
        margin-top : 3px;   
        font-weight : bold;
    }
`
export const InfoContainer = styled.div`
    margin-top : 30px;
    margin-left : 15px;
    display: flex;
    align-items : center;
`
export const InfoImg = styled.div`
`
export const Info = styled.div`
    margin-bottom : 10px;
    margin-left : 20px;
`
export const InfoTitle = styled.div`
    font-weight : bold;
    font-size : 17px;
`
export const InfoLocation = styled.div`
`
export const line = styled.div`
    margin-top : 20px;
    .hr{
        background:#e2e2e2;
        height:1px;
        border:0;
    }
`

export const CalContainer = styled.div`
    width : 352px;
    margin-left : auto;
    margin-right : auto;
`
export const timeContainer = styled.div`
    display : flex;
    align-items: center;
    margin-top : 40px;  
    margin-left : 10px;
    font-size : 14px;
    .title {
        font-size : 17px;
        font-weight : bold;
    }
    .img1 {
        margin-left : 10px;
    }
    .img2 { 
        margin-left : 10px;
    }
`
export const peopleContainer = styled.div`
    display : flex;
    align-items: center;
    margin-top : 40px;
    margin-left : 10px;
    .title {
        font-size : 17px;
        font-weight : bold;
    }
    .minus {
        margin-left : 150px;
        border : none;
        border-radius: 50%;
    }
    .counter {
        margin-left : 30px;
        font-weight : bold;
    }
    .plus {
        margin-left : 30px;
        border : none;
        border-radius: 50%;
    }
`
export const AlarmContainer = styled.div`
    display : flex;
    align-items: center;
    margin-top : 40px;
    margin-left : 10px;
    .title {
        font-size : 17px;
        font-weight : bold; 
    }
    .togle {
        margin-top : 5px;
        margin-left : 230px;
    }   
`

export const timeButton = styled.div`
    margin-left : 10px;
`
export const AlarmButton = styled.div`
    margin-left : 10px;
`
export const SlideContainer = styled.div`
    .slide-container {
        margin-top : 10px;
        width : 96px;
        height : 38px;
        margin-right: 15px;
        border-radius : 20px;
        border : none;
        background-color : #F1F1F1;
        &.selected {
            background-color: #1FBC70; 
            color: #ffffff; 
        }
    }
`
export const ConfirmButton = styled.div`
    margin-top : 200px;
    margin-bottom : 50px;
    width : 398px;
    height : 64px;
    background-color : #BBBBBB;
    border-radius : 20px;
    display : flex;
    align-items : center;
    justify-content : center;
    font-weight : bold;
    margin-left : auto;
    margin-right : auto;
    &.active {
        background-color: #1FBC70; /* 버튼이 선택되었을 때의 배경 색상 */
        color: #ffffff; /* 버튼이 선택되었을 때의 글자 색상 */
      }
`