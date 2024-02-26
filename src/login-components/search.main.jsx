import React from 'react';
import * as S from "../styled-components/signup.style";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

function SearchMain() {
        const navigate = useNavigate();
        const [activeLink, setActiveLink] = useState('');
        const [email, setEmail] = useState('');
        const [authCode, setAuthCode] = useState('');

        const handleLinkClick = (link) => {
            setActiveLink(link);
          };
          useEffect(() => {
            // 페이지가 로드될 때 activeLink를 초기화합니다.
            setActiveLink(window.location.pathname);
          }, []);

          const handleEmailChange = (event) => {
            setEmail(event.target.value);
          };
        
          const handleAuthCodeChange = (event) => {
            setAuthCode(event.target.value);
          };

          const handleEmailSendClick = async () => {
            try {
              const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/email-send', {
                email: email,
              });
        
              if (response.data.isSuccess) {
                console.log('성공입니다.');
                console.log(response.data.result); 
              } else {
                console.log('실패입니다.');
              }
            } catch (error) {
              console.error('요청 처리 중 에러가 발생하였습니다.', error);
            }
          };

          const handleConfirmClick = async () => {
            try {
              const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/find-userId', {
                email: email,
                authCode: authCode
              });
        
              if (response.data.isSuccess) {
                console.log('성공입니다.');
                console.log('아이디:', response.data.result.userId);
                console.log('생성 시간:', response.data.result.createdAt);
                navigate('/searchid');
              } else {
                console.log('실패하였습니다.');
                console.log('에러 메시지:', response.data.message);
              }
            } catch (error) {
              console.error('요청 처리 중 에러가 발생하였습니다:', error);
            }
          };
        
    return (
        <S.page_su>
            <S.titleWrap>
            아이디/비밀번호 찾기
            </S.titleWrap>

            <div style={{ marginTop: '3vh', display: 'flex', justifyContent: 'center' }}>
                <S.StyledLink2
                to='/searchmain'
                onClick={() => handleLinkClick('/searchmain')}
                style={{
                    borderBottom: activeLink === '/searchmain' ? '1px solid #1FBC70' : '1px solid #BBBBBB'
                }}
                >
                아이디 찾기
                </S.StyledLink2>
                <S.StyledLink2
                to='/searchpw'
                onClick={() => handleLinkClick('/searchpw')}
                style={{
                    borderBottom: activeLink === '/searchpw' ? '1px solid #1FBC70' : '1px solid #BBBBBB'
                }}
                >
                비밀번호 찾기
                </S.StyledLink2>
            </div>

            <S.contentWrap>

            <S.inputTitle>학교이메일</S.inputTitle>
            <div style={{display: 'flex', textAlign: 'center'}}>
                <S.inputwrap2>
                <S.input2 
                placeholder="이메일" 
                value={email} 
                onChange={handleEmailChange}/>
                </S.inputwrap2>
                <S.Button2 disabled={!email} onClick={handleEmailSendClick} >인증요청</S.Button2>
            </div>
            <S.inputwrap style={{padding:'2%'}}>
                <S.input  
                placeholder='인증번호 입력'
                value={authCode} 
                onChange={handleAuthCodeChange} />
            </S.inputwrap>
            

            </S.contentWrap>
            <S.bottomButton onClick={handleConfirmClick}>
              확인
            </S.bottomButton>
      </S.page_su>
    );
}

export default SearchMain;