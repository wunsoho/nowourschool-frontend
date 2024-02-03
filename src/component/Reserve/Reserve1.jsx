import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../Image/ReserveImage/back.png';
import Day from '../Image/ReserveImage/Day.png';
import Info from '../Image/ReserveImage/Info.png';
import time from '../Image/ReserveImage/time.png';
import people from '../Image/ReserveImage/people.png';
import Alarm from '../Image/ReserveImage/Alarm.png';
import choose1 from '../Image/ReserveImage/choose1.png';
import choose2 from '../Image/ReserveImage/choose2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Switch from 'react-switch';
import * as B from './Reserve1.style';
import Calendar from 'react-calendar';
import '../Reserve/Calendar.css';
function Reserve1() {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate('/facility/1');
    };  
    const [value, onChange] = useState(new Date());
    const [counter, setcount] = useState(0);

    const handleDateClick = () => {
    };
    const settings1 = {
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
    };
    const fac_detailData1 = [
        { id: 1, Info : "AM 9:00" },
        { id: 2, Info : "AM 10:00" },
        { id: 3, Info : "AM 11:00" },
        { id: 4, Info : "PM 12:00" },
        { id: 5, Info : "PM 13:00" },
    ];
    const fac_detailData2 = [
        { id: 1, Info : "3일 전" },
        { id: 2, Info : "1일 전" },
        { id: 3, Info : "1시간 전" },
        { id: 4, Info : "10분 전" },
    ];
    const [selectedTime, setSelectedTime] = useState([]);
    const [selectedAlarm, setSelectedAlarm] = useState([]);
    const [toggleAlarm, setToggleAlarm] = useState(true);

    const handleTimeButtonClick = (timeInfo) => {
        setSelectedTime((prevSelectedTime) => {
          const isSelected = prevSelectedTime.includes(timeInfo);
          return isSelected
            ? prevSelectedTime.filter((selected) => selected !== timeInfo)
            : [...prevSelectedTime, timeInfo];
        });
      };
      
      const handleTimeButtonClick2 = (AlarmInfo) => {
        if (toggleAlarm) {
          setSelectedAlarm((prevSelectedAlarm) => {
            const isSelected = prevSelectedAlarm.includes(AlarmInfo);
            return isSelected
              ? prevSelectedAlarm.filter((selected) => selected !== AlarmInfo)
              : [...prevSelectedAlarm, AlarmInfo];
          });
        }
      };
    const handleToggleChange = () => {
        setToggleAlarm(!toggleAlarm);
        setSelectedAlarm(null);
      };
      const handleConfirmButtonClick = () => {
        navigate('/', { state: { showModal: true } });
      }; 

    return( 
        <B.Body>
            <B.Back>
                <button onClick={handleGoBack} className = "Backbutton">
                    <img src = { Back } alt = "뒤로가기"/>
                </button>
                <div className = "title">예약</div>
            </B.Back>
            <B.InfoContainer>
                <B.InfoImg>
                    <img src = { Info } alt = "정보"/>
                </B.InfoImg>
                <B.Info>
                    <B.InfoTitle>학생회관 소강당</B.InfoTitle>
                    <B.InfoLocation>22호관 지하 1F</B.InfoLocation>
                </B.Info>
            </B.InfoContainer>
            <B.line>    
                <hr className = "hr"></hr>
            </B.line>
            <B.DayTitle>
                <img src = { Day } alt = "달력"/>
                <div className = "title">이용 날짜</div>
            </B.DayTitle>
            <B.CalContainer>
                <Calendar
                    locale = "en"
                    onChange={onChange}
                    value={value}
                    showNeighboringMonth = {false}
                    calendarType="US"
                    onClickDay={handleDateClick}
                />
            </B.CalContainer>
            <B.line>    
                <hr className = "hr"></hr>
            </B.line>
          <B.timeContainer> 
            <img src = { time } alt = "시간"/>
            <div className = "title">이용 시간</div>
            <img className = "img1" src = { choose1 } alt = "선택가능"/>
            <div>선택가능</div>
            <img className = "img2" src = { choose2 } alt = "선택불가능"/>
            <div>선택불가능</div>
          </B.timeContainer>
          <B.timeButton>
            <Slider {...settings1}>
            {fac_detailData1.map((item) => (
                <div key={item.id}>
                    <B.SlideContainer>
                        <button className={`slide-container ${selectedTime.includes(item.Info) ? 'selected' : ''}`}
                        onClick={() => handleTimeButtonClick(item.Info)}
                        >
                        {item.Info} 
                        </button>
                    </B.SlideContainer>
                </div>
            ))}
            </Slider>
          </B.timeButton>
          <B.peopleContainer>
            <img src = { people } alt = "인원"/>
            <div className = "title">이용 인원</div>
            <button className = "minus" onClick={() => {setcount(counter - 1)}}>-</button>
            <div className = "counter">{counter}명</div>
            <button className = "plus" onClick={() => {setcount(counter + 1)}}>+</button>  
          </B.peopleContainer>
          <B.AlarmContainer>
            <img src = { Alarm } alt = "알림"/>
            <div className = "title">알람 설정</div>
            <div className = "togle">
            <Switch
                onChange={handleToggleChange}
                checked={toggleAlarm}
                uncheckedIcon={false}
                checkedIcon={false}
                height={24}
                width={45}
                onColor="#1FBC70"
            />
            </div>
          </B.AlarmContainer>
          <B.AlarmButton>
          <Slider {...settings1}>
            {fac_detailData2.map((item) => (
                <div key={item.id}>
                    <B.SlideContainer>
                        <button className={`slide-container ${selectedAlarm.includes(item.Info) ? 'selected' : ''}`}
                        onClick={() => handleTimeButtonClick2(item.Info)}
                        >
                        {item.Info}
                        </button>
                    </B.SlideContainer>
                </div>
            ))}
            </Slider>
          </B.AlarmButton>
            <B.ConfirmButton className = {selectedTime.length > 0 || selectedAlarm.length > 0 ? 'active' : ''}
            onClick={handleConfirmButtonClick}>확인</B.ConfirmButton>
        </B.Body>
    );
}
export default Reserve1;