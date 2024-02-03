import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../Image/ReserveImage/back.png';
import Img1 from '../Image/ReturnImage/Img1.png';
import Camera1 from '../Image/ReturnImage/Camera1.png';
import Camera from 'react-camera';
import * as B from './Return.style';
import NavigationBar from "../Navi/NavigationBar";

function Return () {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate('/');
    };
    const cameraRef = useRef();
    const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleTakePhoto = useCallback(async () => {
    if (cameraRef.current) {
      const photo = cameraRef.current.takePhoto();
      setCapturedPhoto(photo);
      
      const formData = new FormData();
      formData.append('photo', photo, 'photo.jpg');

      try {
        const response = await fetch('https://example.com/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('사진 업로드 성공!');
        } else {
          console.error('사진 업로드 실패!');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }
  }, []);
  const handleCompleteReturn = () => {
    // 여기에서 사진 처리나 필요한 작업을 수행한 후, 원하는 경로로 이동
    navigate('/complete-return', { state: { capturedPhoto } });
  };
    return(
    <div className = "ReturnBody">
        <B.Back>
            <button onClick={handleGoBack} className = "Backbutton">
                <img src = { Back } alt = "뒤로가기"/>
            </button>
            <div className = "title">반납하기</div>
        </B.Back>
        <B.ReturnContainer>
            <B.container1>
                <B.imageContainer>
                    <img src = { Img1 } alt = "반납 대표 사진"/>
                    <div className = "Imgtitle">반납 사진 등록하기</div>
                </B.imageContainer>
                <div className = "Info">
                    <div className = "InfoTitle">열린 열람실</div>
                    <div>이용일 2023-12-24<br/>이용시간 9:00~13:00</div>
                </div>
            </B.container1>
            <B.container2>
              <div>
                {capturedPhoto ? (
                <img
                  src={capturedPhoto}
                  alt="촬영한 사진"
                  style={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #ccc',
                  }}
                />
                ) : (
                <Camera
                  ref={cameraRef}
                  style={{
                    width: '30vw',
                    height: '10vh',
                    border: '1px solid #ccc',
                  }}
                />
              )}
              <button onClick={capturedPhoto ? handleCompleteReturn : handleTakePhoto} className = "cabutton">
                <img className = "caImg" src = { Camera1 } alt = "카메라"/>
                <div className = "caTitle">{capturedPhoto ? '사진 완료' : '반납 사진 촬영'}</div>
              </button>
                </div>
            </B.container2>
        </B.ReturnContainer>
        <B.CheckContainer>
          <div className="title">
            <div className = "Info1">잠깐, 반납하기 전 확인하셨나요?</div>
            <div className = "Info2">체크리스트를 작성하여 반납 전 다시 한 번 체크해보아요.</div> 
          </div>
            <div className = "check1">
              <input type='checkbox'/>
              <div>소등은 하였나요?</div>
            </div>
            <div className = "check2">
              <input type='checkbox'/>
              <div>에어컨/히터는 종료하였나요?</div>
            </div>
            <div className = "check3">
              <input type='checkbox'/>
              <div>에어컨/히터는 종료하였나요?</div>
            </div>
            <div className = "check4">
              <input type='checkbox'/>
              <div>에어컨/히터는 종료하였나요?</div>
            </div>
        </B.CheckContainer>
        <NavigationBar/>
    </div>
    );
}
export default Return;