import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`

export const CategoryHeader = styled.div`
    display: flex;
    z-index: 1;
    max-width: 768px;
    width: 100%;
    height: 35px;
    position: fixed;
    top: 0;
    margin: 0;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1.5px solid #D4D4D4;
`

export const CategoryBack = styled.div`
    margin: 5px;
`

export const CategoryTitle = styled.div`
    margin: 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    font-size: 21px;
    font-weight: bold;
`

export const CategorySearch = styled(Link)`
    margin-right: 15px;
    text-decoration: none;
    color: black;
`

export const CategoryAll = styled.div`
    display: flex;
`

export const Category1st = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: calc(100vh - 45px);
    margin-top: 45px;
    border-right: 1.5px solid #D4D4D4;
    overflow-y: auto;

    & > div {
        display: flex;
        margin-left: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        color: #BBBBBB;
        cursor: pointer;

        &.active {
            color: #1FBC70;
        }
    }
`

export const Category2nd = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: calc(100vh - 45px);
    margin-top: 45px;
    overflow-y: auto;

    & > div {
        display: flex;
        margin-left: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        color: #BBBBBB;

        &.active {
            color: #1FBC70;
        }
    }
`