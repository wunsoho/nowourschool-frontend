import styled from "styled-components";

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
    position: fixed;
    top: 0;
    margin: 0;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #B1B1B1;
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

export const CategorySearch = styled.div`
    margin-right: 15px;
`