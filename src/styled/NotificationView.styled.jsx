import styled from "styled-components";

export const NotiViewContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`

export const NotiViewHeader = styled.div`
    display: flex;
    z-index: 1;
    max-width: 768px;
    width: 100%;    
    height: 35px;
    position: fixed;
    top: 0;
    margin: 0;
    padding: 5px;
    align-items: center;
    background-color: white;
`

export const NotiViewBack = styled.div`
    margin: 5px;
`

export const NotiViewTitle = styled.div`
    margin: 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    font-size: 21px;
    font-weight: bold;
`

export const NotiViewBoard = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: calc(100vh - 130px);
    margin: 65px 10px 0 10px;
`

export const NotiTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const NotiDate = styled.div`
    display: flex;
    justify-content: end;
    font-size: 13px;
    color: #A1A1A1;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const NotiContent = styled.div`
    border-top: 1.6px solid #D4D4D4;
    padding-top: 7px;
    overflow-y: auto;
`

export const NotiList = styled.div`
    position: fixed;
    right: 15px;
    bottom: 15px;
    padding: 8px 25px;
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: bold;
    background-color: #055A23;
    text-decoration: none; 
`