import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Profile from './profile';
import None from './none';
import * as B from "./Style/none.style";

function CarouselN() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='slick-slider' style={{fontFamily: "Pretendard"}}>
          <B.FirstBack>
            <Slider {...settings}>
              <div>
                <Profile/>
              </div>
              <div>
                <None/>
              </div>
            </Slider>
          </B.FirstBack>
        </div>  
    );
}

export default CarouselN;