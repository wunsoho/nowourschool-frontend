import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Profile from './profile';
import Ing from './ing';
import * as B from "./Style/profile.style";

function CarouselG() {
    const settings = {
        dots: true,
        arrow: false,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='slick-slider'>
            <B.FirstBack>
                <Slider {...settings}>
                    <div>
                        <Profile/>
                    </div>
                    <div>
                        <Ing/>
                    </div>
                </Slider>
            </B.FirstBack>
        </div>
    );
}

export default CarouselG;