import styled from "styled-components";

/*프로필박스*/
export const ProfileBox = styled.div`
    position: relative;
    width: 387px;
    height: 160px;
    background-color: #1FBC70;
    left: auto;
    right: auto;
    border-radius: 20px;
`;

export const Img = styled.img`
    position: absolute;
    width: 56px;
    height: 56px;
    background-color: #D9D9D9;
    top: 25px;
    left: 15px;
    border-radius: 10px;
`;

export const Title = styled.div`
    position: absolute;
    top: 32px;
    left: 88px;
    color: #FFFFFF;
`;
  
export const Name = styled.span`
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    letter-spacing: -0.5px;
`;

export const Sub = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.5px;
`;
  
export const ClassInfo = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.5px;
    position: absolute;
    top: 58px;
    left: 88px;
    color: #FFFFFF;
`;
/*예약*/
  
export const Reservation = styled.div`
    position: absolute;
    background-color: #FFFFFF66;
    width: 356px;
    height: 38px;
    margin-top: 99px;
    margin-left: 15px;
    border-radius: 20px;
`;

export const Left = styled.div`
    font-size: 14px;
    position: absolute;
    line-height: 20px;
    letter-spacing: -0.5px;
    top: 50%;
    margin-left: 65px; /*80 - 15*/
    transform: translateY(-50%);
    color: #5C5D61;
`;

export const Right = styled.div`
    font-size: 14px;
    position: absolute;
    line-height: 20px;
    letter-spacing: -0.5px;
    top: 50%;
    margin-left: 244px; /*259 - 14*/
    transform: translateY(-50%);
    color: #5C5D61;
`;
  
export const VerticalBorder = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 0.5px solid #FFFFFF66;
`;