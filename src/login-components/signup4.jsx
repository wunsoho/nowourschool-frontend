import React from 'react';
import * as S from "../styled-components/signup.style"
import { Avatar } from 'antd';
import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Signup4() {
    const navigate = useNavigate();
    // 프로필 사진 상태 관리
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    

    // 파일 상태 관리
    const [file, setFile] = useState(null);

    // 닉네임 상태 관리
    const [nickname, setNickname] = useState("");

    // 파일 입력 요소 참조 관리
    const fileInput = useRef(null);
  
    // 파일 변경 핸들러
    const onChange = (e) => {
      if(e.target.files[0]){
        // 파일이 선택되었을 경우
        setFile(e.target.files[0]);
        
        // 화면에 프로필 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.readyState === 2){
            setImage(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0]);
      } else {
        // 파일 선택이 취소되었을 경우
        setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
      }
    };
    const location = useLocation();
    
    const { name, userId, email, password, identify_num } = location.state;
  
   

    
    const handleSubmit = async () => {
          // registerReqDTO 객체를 생성하고 값 할당
      const registerReqDTO = {
        userId: userId,
        name: name,
        email: email,
        password: password,
        identify_num: identify_num,
        nickname: nickname,
      };

              // registerReqDTO 객체를 JSON 문자열로 변환하고 Blob 객체로 변환
      const registerReqDTOBlob = new Blob([JSON.stringify(registerReqDTO)], { type: 'application/json' });

      const formData = new FormData();
      // Blob 객체를 FormData에 추가
      formData.append('registerReqDTO', registerReqDTOBlob);
      formData.append('image', file);
      
      
      
      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/register', formData, config );
      
        if (response.status === 200) {
          const data = response.data;
          // 응답 데이터 출력
          console.log(data);
      
          if (data.isSuccess) {
            navigate('/signup5')
            
          } else {
            // 응답이 실패인 경우
            const code = data.code;
            const message = data.message;
      
            switch (code) {
              case 'AUTH_4008':
                // 이메일 형식이 알맞지 않은 경우 처리
                console.error(message);
                // 처리 로직 작성
                break;
              case 'AUTH_4002':
                // 아이디 중복인 경우 처리
                console.error(message);
                // 처리 로직 작성
                break;
              case 'AUTH_4003':
                // 닉네임 중복인 경우 처리
                console.error(message);
                // 처리 로직 작성
                break;
              default:
                // 다른 실패 코드에 대한 처리
                console.error('API 요청 실패:', message);
                // 처리 로직 작성
                break;
            }
          }
        } else {
          // API 요청이 실패한 경우
          console.error('API 요청 실패');
          // 실패 처리 로직 작성
        }
      } catch (error) {
        console.error('API 요청 중 오류 발생', error);
        console.log(registerReqDTO)
        console.log(file)
        // 오류 처리 로직 작성
      }}

    return (
        <S.page_su>
            <S.titleWrap>
                프로필 생성
            </S.titleWrap>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'10vh'}}>
        </div>
        
        <div>
      <Avatar 
        src={Image} 
        style={{left: '50%', transform: 'translate(-50%, -50%)',top: '40%'}} 
        size={200} 
        onClick={()=>{fileInput.current.click()}}
      />
      <input 
        type='file' 
        style={{display:'none'}}
        accept='image/jpg,image/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}
      />

    </div>
        <S.contentWrap>
            <S.inputTitle>닉네임</S.inputTitle>
            <S.inputwrap style={{padding:'2%'}}>
                <S.input 
                placeholder="닉네임을 입력해주세요."
                value={nickname} 
                onChange={e => setNickname(e.target.value)} 
                />
            </S.inputwrap>
        </S.contentWrap>
        <S.bottomButton 
        disabled={!nickname}
        onClick={handleSubmit}>
            확인
        </S.bottomButton>
    </S.page_su>
  );
}

export default Signup4;