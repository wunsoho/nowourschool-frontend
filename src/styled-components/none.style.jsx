import styled from "styled-components";


/*프로필박스*/
export const BoxLine = styled.div`
    position: relative;
    width: 387px;
    height: 158px;
    left: auto;
    right: auto;
    border-radius: 20px;
    border: 2px solid #1FBC70;
    display: flex;
    align-items: center;
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
    width: 356px;
    height: 38px;
    margin-top: 99px;
    margin-left: 15px;
    border-radius: 20px;
    margin-bottom: 22px;
`;


export const Left = styled.div`
    font-size: 14px;
    position: absolute;
    line-height: 20px;
    letter-spacing: -0.5px;
    top: 50%;
    margin-left: 65px; /*80 - 15*/
    transform: translateY(-50%);
    color: #FFFFFF;
`;

export const Right = styled.div`
    font-size: 14px;
    position: absolute;
    line-height: 20px;
    letter-spacing: -0.5px;
    top: 50%;
    margin-left: 244px; /*259 - 14*/
    transform: translateY(-50%);
    color: #FFFFFF;
`;
  
export const VerticalBorder = styled.link`
    
`;
