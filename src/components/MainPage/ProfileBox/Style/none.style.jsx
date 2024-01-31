import styled from "styled-components";


export const FirstBack = styled.div`
    margin-bottom: 10vw;
    margin-right: 1vw;
`;

/*프로필박스*/
export const BoxLine = styled.div`
    position: relative;
    width: 95vw;
    height: 17vh;
    left: auto;
    right: auto;
    margin-left: 0.2vw;
    border-radius: 20px;
    border: 2px solid #1FBC70;
    display: flex;
    align-items: center;
    background-color: #F1FFF3;
`;

export const Phrase = styled.div`
    position: absolute;
    top: 43px;
    left: 80px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;
    color: #1FBC70;
`;

export const Reservation = styled.div`
    position: absolute;
    background-color: #1FBC70;
    width: 88vw;
    height: 4.5vh;
    margin-top: 23vw;
    margin-left: 3.5vw;
    border-radius: 20px;
    margin-bottom: 22px;
`;


export const Left = styled.div`
    font-size: 14px;
    position: absolute;
    line-height: 20px;
    letter-spacing: -0.5px;
    top: 50%;
    margin-left: 16.5vw; /*80 - 15*/
    transform: translateY(-50%);
    color: #FFFFFF;
`;

export const Right = styled.div`
    font-size: 14px;
    position: absolute;
    line-height: 20px;
    letter-spacing: -0.5px;
    top: 50%;
    margin-left: 58.5vw; /*259 - 14*/
    transform: translateY(-50%);
    color: #FFFFFF;
`;
  
export const VerticalBorder = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 0.5px solid #FFFFFF66;
`;
