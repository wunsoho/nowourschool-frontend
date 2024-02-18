import styled from "styled-components";
import { Link } from 'react-router-dom';

export const page = styled.div`
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const contentWrap = styled.div`
    justify-content: center;
    text-align : center;
    align-items: center;
`;

export const inputWrap = styled.div`
    width: 86vw;
    height: 5vh;
    display: flex;
    border-radius: 14px;
    
    background-color: #F5F5F5;
    box-shadow: 0.5px 0.5px 30px 0 rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;


export const logoWrap = styled.div`
   top: 20vh;
`;

export const errorMessageWrap = styled.div`
   margin-top: 0.5vh;
   color: #FC324A;
   font-size: 10px;
`;

export const bottomButton = styled.button`
    width : 86vw;
    height : 5vh;
    border: none;
    font-wieght: 700;
    font-size: 15px;
    background-color: #1FBC70;
    border-radius: 14px;
    color: white;
    cursor: pointer;
`;


export const Bottom = styled.div`
    margin-top: 3vh;
    margin-left: 20vw;
    `;

export const StyledLink = styled(Link)`
  color: #D9D9D9; 
  text-decoration: none;
  font-size: 12px;
  margin: 0 10px; 
  display: inline-block;
  
  &::after {
    content: '|'; 
    color: #D9D9D9; // 
    margin-left: 32px; // 
  }
  &:last-child::after {
    content: ''; 
  }
`;

export const SearchIdButtonR = styled.button`
    width : 43vw;
    height : 3vh;
    border: none;
    font-wieght: 700;
    font-size: 15px;
    background-color: #1FBC70;
    border-radius: 14px;
    color: white;
    cursor: pointer;
`;

export const SearchIdButtonL = styled.button`
    width : 43vw;
    height : 3vh;
    border: none;
    font-wieght: 700;
    font-size: 15px;
    background-color: #1FBC70;
    border-radius: 14px;
    color: white;
    cursor: pointer;
`;
