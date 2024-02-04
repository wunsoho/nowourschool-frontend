import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import * as S from './StarRating.style';

const ARRAY = [0, 1, 2, 3, 4];

function StarRating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };

  return (
    <S.Wrap>
      <S.RatingText>별점을 선택해주세요.</S.RatingText>
      <S.Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </S.Stars>
      <S.RatingText style={{marginBottom:"2.5vh"}}>자세한 리뷰를 남겨주세요.</S.RatingText>
    </S.Wrap>
  );
}

export default StarRating;
