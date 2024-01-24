import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Profile from './profile';
import Ing from './ing'

function CarouselG() {
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
                    <Ing/>
                </div>
            </Slider>
        </div>
    );
}

export default CarouselG;