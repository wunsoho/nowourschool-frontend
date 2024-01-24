import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Profile from './profile';
import None from './none';

function CarouselN() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='slick-slider'>
          <Slider {...settings}>
            <div>
              <Profile/>
            </div>
            <div>
              <None/>
            </div>
          </Slider>
        </div>  
    );
}

export default CarouselN;