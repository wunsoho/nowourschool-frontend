import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const page_su = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 50%;
    transform: translate(-50%,0);
    max-width: 90vw;
    display: flex;
    flex-direction: column;
`;


export const titleWrap = styled.div`
    font-size: 21px;
    text-align: center;
    font-weight: 800;
    margin-top: 4vh;
`;

export const contentWrap = styled.div`
    margin-top: 8vh;
    flex: 1;
`;

export const inputTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

export const inputwrap= styled.div`
    border-radius: 10px;
    margin-top: 1vh;
    background-color: #F1F1F1;
    padding: 4%;
`;

export const input= styled.input`
    display: inline-box;
    width: 100%;
    outline: none;
    border: none;
    height: 3vh;
    font-size: 15px;
    background-color: #F1F1F1;
    color: #414247;
    &::placeholder {
        color: #BBBBBB;
        font-size: 16px;
      }
`;

export const inputwrap2= styled.div`
    border-radius: 10px;
    width: 74%;
    margin-top: 1vh;
    background-color: #F1F1F1;
    padding: 2%;
`;

export const input2= styled.input`
    display: inline-box;
    width: 100%;
    outline: none;
    border: none;
    height: 3vh;
    font-size: 15px;
    background-color: #F1F1F1;
    color: #414247;
    &::placeholder {
        color: #BBBBBB;
        font-size: 16px;
      }
`;


export const bottomButton= styled.button`
    width: 100%;
    height: 7vh;
    border: none;
    font-weight: 700;
    background-color: #1FBC70;
    border-radius: 14px;
    margin-bottom: 7vh;
    cursor: pointer;

    &[disabled] {
        background-color: #BBBBBB;
        color: #666;
        cursor: not-allowed;
`;
export const Button2= styled.button`
    width: 25%;
    height: 4.5vh;
    border: none;
    margin-left: 1vw;
    margin-top: 1vh;
    font-weight: 700;
    background-color: #1FBC70;
    border-radius: 10px;
    cursor: pointer;


    &[disabled] {
        background-color: #BBBBBB;
        color: #666;
        cursor: not-allowed;
`;

export const MessageWrap = styled.div`
   margin-left: 1vw;
   margin-top: 0.5vh;
   color: #5ABD8D;
   font-size: 10px;
`;
export const profile= styled.div`
   width: 160px;
   height: 160px;
   background-color: #F1F1F1;
   border-radius: 50%;
`;

export const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 52vw;
  position: absolute;
  top: 30vh;
  background-color: transparent;
`;

export const CircleIcon = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  color: #BBBBBB;
  width: 40px;
  height: 40px;
`;

export const PlusIcon = styled(FontAwesomeIcon).attrs({ icon: faPlus })`
  position: absolute;
  color: black;
  font-weight: 900;
`;

export const SearchIdButtonR = styled.button`
    width : 43vw;
    height : 5vh;
    border: none;
    font-wieght: 700;
    font-size: 15px;
    background-color: #1FBC70;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    display: inline-block;
`;

export const SearchIdButtonL = styled.button`
    width : 43vw;
    height : 5vh;
    border: 1.5px solid #1FBC70;
    font-wieght: 700;
    font-size: 15px;
    background-color: white;
    border-radius: 20px;
    color: #1FBC70;
    cursor: pointer;
    display: inline-block;
`;

export const IdBox = styled.div`
    margin-top: 5vh;
    width : 90vw;
    height : 22vh;
    background-color: #F1FFF3;
    border-radius: 20px;
`;

export const StyledLink2 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000; 
  text-decoration: none;
  font-size: 14px;
  margin: 0 10px; 
`;