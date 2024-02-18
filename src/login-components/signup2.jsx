import React from 'react';
import * as S from "../styled-components/signup.style"
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [authCode, setAuthCode] = useState('');

  const handleUserIdInputChange = (event) => {
    const {value} = event.target;
    setUserId(value);
  };

  const handlePasswordInputChange = (event) => {
    const {value} = event.target;
    setPassword(value);
  };

  const handleEmailInputChange = (event) => {
    const {value} = event.target;
    setEmail(value);
  };

  const handleAuthCodeInputChange = (event) => { 
    const {value} = event.target;
    setAuthCode(value);
  };

  const location = useLocation();
  const { name, identifyNum } = location.state;

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
        const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/register', {
            userId,
            name: name,
            email,
            password,
            identify_num: identifyNum,
            nickname: '',  
        });

        if (response.data.isSuccess) {
            // 회원가입 성공 처리
            console.log(response.data.result);
            console.log(response.data.message);
            navigate('/signup3');
        } else {
            // 회원가입 실패 처리
            console.log('회원가입 실패!');
            console.log(response.data.message);
        }

        const responseEmailAuth = await axios.post('http://13.125.247.248:8080/api/v1/auth/email-auth', {
                email:'',
                authCode,
        });

        /*실패*/
        if (!responseEmailAuth.data.isSuccess) {
            console.log(responseEmailAuth.data.result);
            console.log(responseEmailAuth.data.message);
            return;
        }
        /*성공*/
        console.log(responseEmailAuth.data.result);
        console.log(responseEmailAuth.data.message);
        
      } catch (error) {
        console.error(error);
    }
  };


const handleEmailVerification = async () => {
  try {
    const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/email-send', {
      email,
    });
    
    if (response.data.isSuccess) {
      console.log(response.data.message);
      // 인증 성공 시 처리
    } else {
      console.log(response.data.message);
      // 인증 실패 시 처리
    }
  } catch (error) {
    console.error(error);
  }
};
  

    return (
      <S.page_su>
        <S.titleWrap>
          정보 입력
        </S.titleWrap>
  
        <S.contentWrap>

          <S.inputTitle>아이디</S.inputTitle>
          <div style={{display: 'flex', textAlign: 'center'}}>
            <S.inputwrap2>
              <S.input2 
              type="text"
              value={userId}
              onChange={handleUserIdInputChange}
              placeholder="아이디를 입력해주세요." />
            </S.inputwrap2>
            <S.Button2 disabled={true} >중복확인</S.Button2>
          </div>
          <S.MessageWrap>영문 소문자로 시작하는 4~15자의 아이디를 입력해주세요.</S.MessageWrap>

          <S.inputTitle style={{ marginTop: '3vh' }}>비밀번호</S.inputTitle>
          <S.inputwrap>
            <S.input 
            type="password"
            value={password}
            onChange={handlePasswordInputChange}
            placeholder="비밀번호를 입력해주세요." />
          </S.inputwrap>
          <S.inputwrap>
            <S.input
            type="password" 
            value={password}
            onChange={handlePasswordInputChange}
            placeholder="비밀번호를 다시 입력해주세요." />
          </S.inputwrap>
          <S.MessageWrap>영문과 숫자를 조합하여 8~15자의 비밀번호를 입력해주세요.</S.MessageWrap>
          <S.MessageWrap>특수문자 {'('}!,@,#,$,%,&,*{')'} 가능</S.MessageWrap>

          <S.inputTitle style={{ marginTop: '3vh' }}>학교</S.inputTitle>
          <S.inputwrap>
            <S.input placeholder="학교명 검색" />
          </S.inputwrap>

          <S.inputTitle style={{ marginTop: '3vh' }}>학교이메일</S.inputTitle>
          <div style={{display:'flex', textAlign:'center'}}>
            <S.inputwrap2>
              <S.input2 
              type='email'
              value={email}
              onChange={handleEmailInputChange}
              placeholder="이메일" />
            </S.inputwrap2>
            <S.Button2 onClick={handleEmailVerification} disabled={!email} >인증요청</S.Button2>
          </div>
          <S.inputwrap>
            <S.input
            type="text" 
            value={authCode}
            onChange={handleAuthCodeInputChange} 
            placeholder="인증번호 입력" />
          </S.inputwrap>
          

        </S.contentWrap>
        <S.bottomButton onClick={handleSignup} disabled={!userId || !email|| !password}>
          확인
        </S.bottomButton>
      </S.page_su>
    );
  }
  
  export default Signup2;