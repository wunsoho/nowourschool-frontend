import React from 'react';
import * as S from "../styled-components/signup.style"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';


function Signup2() { 
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [schoolName, setSchoolName] = useState();
  const [authNum, setAuthNum] = useState();


  const handleSchoolClick = () => {
    navigate('/signup3', { state: { name, identify_num, userId, password, confirmPassword, email, } });
  };
  useEffect(() => {
    if (state.userId) {
      setUserId(state.userId);
    }
    if (state.password) {
      setPassword(state.password);
    }
    if (state.email) {
      setEmail(state.email);
    }
    if (state.schoolName) {
      setSchoolName(state.schoolName);
    }
    if (state.confirmPassword) {
      setConfirmPassword(state.confirmPassword)
    }
  },[]);

    const { state = {} } = useLocation();
    const { name, identify_num } = state;

  const sendEmail = async () => {
    try {
        const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/email-send', {
            email: email,  // 여기에 이메일 상태를 넣어주세요.
        });
        if (response.data.isSuccess) {
            console.log('인증번호가 정상적으로 발송되었습니다.');
            console.log(response.data.result);  // 인증번호를 콘솔에 출력합니다.
            // 필요한 경우 이곳에서 다른 작업을 수행하세요. 예: 인증번호를 상태에 저장하는 등
        } else {
            console.log('이메일 발송에 실패했습니다.');
        }
    } catch (error) {
        console.error('이메일 발송 중 오류가 발생했습니다:', error);
    }
};

const verifyEmail = async () => {
  try {
      const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/email-auth', {
          email: email,  // 이메일 상태
          authCode :authNum  // 인증번호 상태
      });
      if (response.data.isSuccess) {
          console.log('이메일 인증에 성공하였습니다.');
          console.log(response.data.result); 
          navigate('/signup4',{
            state: { name:name, identify_num:identify_num, userId:userId, password:password, email:email, }
          });
          console.log(state)
      } else {
          console.log('이메일 인증에 실패하였습니다.');
          console.log(response.data.message);  // "이메일 인증번호 불일치" 메시지를 콘솔에 출력합니다.
      }
  } catch (error) {
      console.error('이메일 인증 중 오류가 발생했습니다:', error);
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
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요." />
            </S.inputwrap2>
            <S.Button2>중복확인</S.Button2>
          </div>
          <S.MessageWrap>영문 소문자로 시작하는 4~15자의 아이디를 입력해주세요.</S.MessageWrap>

          <S.inputTitle style={{ marginTop: '3vh' }}>비밀번호</S.inputTitle>
          <S.inputwrap>
            <S.input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요." />
          </S.inputwrap>
          <S.inputwrap>
            <S.input
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력해주세요." />
          </S.inputwrap>
          <S.MessageWrap>영문과 숫자를 조합하여 8~15자의 비밀번호를 입력해주세요.</S.MessageWrap>
          <S.MessageWrap>특수문자 {'('}!,@,#,$,%,&,*{')'} 가능</S.MessageWrap>

          <S.inputTitle style={{ marginTop: '3vh' }}>학교</S.inputTitle>
          <S.inputwrap>
            <S.input 
            placeholder={schoolName || "학교명 검색"}
            onClick={handleSchoolClick}
            readOnly/>
          </S.inputwrap>

          <S.inputTitle style={{ marginTop: '3vh' }}>학교이메일</S.inputTitle>
          <div style={{display:'flex', textAlign:'center'}}>
            <S.inputwrap2>
              <S.input2 
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일" />
            </S.inputwrap2>
            <S.Button2 onClick={sendEmail} disabled={!email}>인증요청</S.Button2>
          </div>
          <S.inputwrap>
            <S.input
            type="text" 
            value={authNum}
            onChange={(e) => setAuthNum(e.target.value)}
            placeholder="인증번호 입력" />
          </S.inputwrap>   

        </S.contentWrap>
        <S.bottomButton 
        onClick={verifyEmail}
        disabled={!userId|| !password|| !confirmPassword|| !email|| !authNum}>
          확인
        </S.bottomButton>
      </S.page_su>
    );
  }
  
  export default Signup2;