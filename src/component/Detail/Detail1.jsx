import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import * as B from './Detail1.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fac_detail1 from '../Image/DetailImage/fac_detail1.png';
import Ellipse9 from '../Image/DetailImage/Ellipse9.png';
import Ellipse10 from '../Image/DetailImage/Ellipse10.png';
import NextArrow_img from '../Image/DetailImage/NextArrow.png';
import PrevArrow_img from '../Image/DetailImage/PrevArrow.png';
import Map from '../Detail/Map';

function Detail1() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reservationStatus, setReservationStatus] = useState(false);

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings2 = {
    infinite: false,
    speed: 500, 
    slidesToShow: 1 ,
    slidesToScroll: 1,
    centerMode : true,
};
  const fac_detailData = [
    { id: 1, poster_path: fac_detail1 },
    { id: 2, poster_path: fac_detail1 },
    { id: 3, poster_path: fac_detail1 },
    { id: 4, poster_path: fac_detail1 },
    { id: 5, poster_path: fac_detail1 },
  ];
  const review_Data= [
    { id: 1, poster_path: Ellipse9, title : '닉네임1' },
    { id: 2, poster_path: Ellipse10, title : '닉네임2'},
  ]
  const AVR_RATE = 82;
    const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
    const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
    const calcStarRates = () => {
        let tempStarRatesArr = [0, 0, 0, 0, 0];
        let starVerScore = (AVR_RATE * 70) / 100;
        let idx = 0;
        while (starVerScore > 14) {
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };
    useEffect(() => {
        setRatesResArr(calcStarRates)
    }, [])
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
  
        if (scrollPosition >= pageHeight) {
          console.log('스크롤이 페이지 끝에 도달했습니다!');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const onClickButton1 = () => {
      if (reservationStatus) {
        // 반납 기능 처리
        console.log('예약 반납 중');
      } else {
        navigate(`/status`);
      }
    };

    const onClickButton2 = () => {
      if (reservationStatus) {
        // 연장 기능 처리
        console.log('예약 연장 중');
      } else {
        navigate(`/facility/${id}/reserve1`);
      }
    };
    const onClickReviewButton = () => {
      navigate(`/review`);
    }
  return (
    <B.Body>
      <B.ImageSlider>
        <Slider {...settings1}>
          {fac_detailData.map((item) => (
            <div key={item.id}>
              <div className="slide-container">
                <img className = "img" src={item.poster_path} alt={`facility${item.id}`} />
              </div>
            </div>
          ))}
        </Slider>
      </B.ImageSlider>
      <B.All>
        <B.TextContainer>
          <B.TitleText>학생회관 소강당</B.TitleText>
          <B.Number>22호관</B.Number>
          <B.Time>이용가능시간 9:00~22:00</B.Time>
        </B.TextContainer>
        <B.ReviewWrap>
          <B.StarRateWrap>
              {STAR_IDX_ARR.map((item, idx) => {
                  return <span className='star_icon' key={`${item}_${idx}`}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='7' height='10' viewBox='0 0 14 13' fill='#cacaca'>
                          <clipPath id={`${item}StarClip`}>
                              <rect width={`${ratesResArr[idx]}`} height='10' />
                          </clipPath>
                          <path
                              id={`${item}Star`}
                              d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                              transform='translate(-2 -2)'
                          />
                          <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#FFBE55'
                          />
                      </svg>
                  </span>
              })
              }
              <B.StarText>4.1</B.StarText>
          </B.StarRateWrap>
          <B.ReviewButton>
            <button className = "button1" onClick = {onClickReviewButton}>{'리뷰 86개 전체보기 >'}</button>
          </B.ReviewButton>
        </B.ReviewWrap>
      </B.All>
      <B.ReviewSilder>
        <Slider {...settings2}>
          {review_Data.map((item) => (
            <div key={item.id}>
              <B.ReviewContainer>
                <div className="review-slide">
                  <B.ImageContainer>
                    <img src={item.poster_path} alt={`facility${item.id}`} />
                      <B.ReviewInfo>
                        <div>{ item.title }</div>
                        <B.ReviewDate>2023.10.10</B.ReviewDate>
                      </B.ReviewInfo>
                      <B.StarRateWrap2>
                        {STAR_IDX_ARR.map((item, idx) => {
                            return <span className='star_icon' key={`${item}_${idx}`}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='7' height='10' viewBox='0 0 14 13' fill='#cacaca'>
                                    <clipPath id={`${item}StarClip`}>
                                        <rect width={`${ratesResArr[idx]}`} height='10' />
                                    </clipPath>
                                    <path
                                        id={`${item}Star`}
                                        d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                                        transform='translate(-2 -2)'
                                    />
                                    <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#FFBE55'
                                    />
                                </svg>
                            </span>
                        })
                        }
                      </B.StarRateWrap2>
                  </B.ImageContainer>
                  <B.ReviewDetail>잘썼습니다 공연하기 좋습니다</B.ReviewDetail>
                </div>
              </B.ReviewContainer>
            </div>
          ))}
        </Slider>
      </B.ReviewSilder>
      <B.MapInfo>
        <B.DetailTitle>세부 위치</B.DetailTitle>
        <B.DetailContent>학생회관(22호관) 지하 1층</B.DetailContent>
        <B.Map><Map/></B.Map>
      </B.MapInfo>
      <B.LocationData>
        {[
          { title: '주요 목적', content: '발표회, 세미나' },
          { title: '이용 가능 물품', content: '좌석 294석, 액정프로젝터, 대형스크린, 마이크(유/무선)' },
          { title: '이용 주의사항', content: '액정프로젝터 위치 옮기지 말 것' },
        ].map((item, index) => (
          <DetailDataItem key={index} title={item.title} content={item.content} />
        ))}
      </B.LocationData>
      <B.ButtonContainer>
      <B.Button1 key={1} onClick={() => onClickButton1()}>
          {reservationStatus ? '반납하기' : '예약현황'}
        </B.Button1>
        <B.Button2 key={2} onClick={() => onClickButton2()}>
          {reservationStatus ? '연장하기' : '예약하기'}
        </B.Button2>
      </B.ButtonContainer>
    </B.Body>
  );
}

function DetailDataItem({ title, content }) {
  return (
    <B.DataContainer>
      <B.DetailTitle>{title}</B.DetailTitle>
      <B.DetailContent>{content}</B.DetailContent>
    </B.DataContainer>
  );
}

const NextArrow = ({ onClick }) => {
    return (
      <B.ArrowContainer onClick={onClick} right>
        <img src={NextArrow_img} alt="Next" />
      </B.ArrowContainer>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <B.ArrowContainer onClick={onClick} left>
        <img src={PrevArrow_img} alt="Prev" />
      </B.ArrowContainer>
    );
  };


export default Detail1;