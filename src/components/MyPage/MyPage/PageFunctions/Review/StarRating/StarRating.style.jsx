import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  width: 96vw;
  flex-direction: column;
  padding-top: 15px;
`;

export const RatingText = styled.div`
  margin-Left: 3vw;
  color: #414247;
  letter-spacing: -0.3vw;
  font-size: 16px;
  font-weight: 400;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding-top: 1vw;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;