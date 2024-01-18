import React, { useState } from 'react';
import * as A from './Main.style';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import facility1 from "../Image/MainImage/facility1.png";
import facility2 from "../Image/MainImage/facility2.png";
import facility3 from "../Image/MainImage/facility3.png";


function Main() {
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const navigate = useNavigate();

    const categories = ['#조용한', '#회의', '#팀플', '#스터디룸', '#프린트'];

    const ImgWrapper = styled.div`
    padding: 20px;
    text-align: center;
    
    & img {
        margin: 0 auto;
    }
    `;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToShow: 1 ,
        slidesToScroll: 1,
        centerMode : true,
        centerPadding : '100px',
    };

    const onClickImg = (id) => {
        navigate(`/facility/${id}`, {
        });
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };

    const facilityData = [
        { id: 1, title: "11호관 커피", poster_path: facility2 },
        { id: 2, title: "휴게실", poster_path: facility2 },
        { id: 3, title: "북카페", poster_path: facility3 },
        { id: 3, title: "북카페", poster_path: facility3 },
        { id: 3, title: "북카페", poster_path: facility3 },
    ];

    return (
        <div className = "MainBody">
            <A.Text>
                <A.GreenText>김연지</A.GreenText>님, 오늘은
                <br></br>
                <div>이런 시설 어때요 ?</div>
            </A.Text>
            <A.Tag>
                {categories.map(category => (
                    <A.button
                        className='CircleButt'
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        style={{ marginRight: '3px', marginBottom: '3px', padding: '2px 4px', 
                        cursor: 'pointer', backgroundColor: selectedCategory === category ? '#d3d3d3' : 'initial',
                        color: selectedCategory === category ? 'green' : 'black'}}
                    >
                    {category}  
                    </A.button>
                ))}
            </A.Tag>
            <A.container>
                <A.CustomSlider {...settings}>
                    {facilityData.map((item) => (
                        <A.component key={item.id} onClick={() => onClickImg(item.id, item.title, item.poster_path)}>
                            <ImgWrapper>
                                <img src={item.poster_path} alt={`facility${item.id}`}/>
                                <div style={{ textAlign: 'center' }}>{item.title}</div>  
                            </ImgWrapper>  
                        </A.component>
                    ))}
                </A.CustomSlider>
            </A.container>
        </div>
    );
}

export default Main;