import React from 'react';
import * as S from "../styled-components/signup.style"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchPw() {
    const navigate = useNavigate();

    const goSearchNewPw = () => {
        const state = {
          userId,
          authCode,  
          email  
        };
        console.log(state);
        navigate('/searchnewpw', { state });
    
      };
    
    const [userId, setUserId] = useState();
    const [email, setEmail] = useState();
    const [authCode, setAuthCode] = useState();
    const [activeLink, setActiveLink] = useState('');


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

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
      useEffect(() => {
        // 페이지가 로드될 때 activeLink를 초기화합니다.
        setActiveLink(window.location.pathname);
      }, []);
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
                    borderBottom: activeLink === '/searchmain' ? '1px solid #1FBC70' : '1px solid #BBBBBB',
                
                }}
                >
                아이디 찾기
                </S.StyledLink2>
                <S.StyledLink2
                to='/searchpw'
                onClick={() => handleLinkClick('/searchpw')}
                style={{
                    borderBottom: activeLink === '/searchpw' ? '1px solid #1FBC70' : '1px solid #BBBBBB',
    
                }}
                >
                비밀번호 찾기
                </S.StyledLink2>
            </div>


  
            <S.contentWrap>
                <S.inputTitle>아이디</S.inputTitle>
                <S.inputwrap style={{padding: '2%'}}>
                    <S.input 
                    type='text'
                    placeholder='가입된 아이디를 입력해주세요.'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}/>
                </S.inputwrap>
            
                <S.inputTitle>학교이메일</S.inputTitle>
                <div style={{display: 'flex', textAlign: 'center'}}>
                    <S.inputwrap2>
                    <S.input2 
                    placeholder="이메일" 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    </S.inputwrap2>
                    <S.Button2 onClick={sendEmail} disabled={!email} >인증요청</S.Button2>
                </div>

                <S.inputwrap style={{padding:'2%'}}>
                    <S.input  
                    placeholder='인증번호 입력'
                    type='text'
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)} />
                </S.inputwrap>
            

            </S.contentWrap>
            <S.bottomButton onClick={goSearchNewPw} disabled={!authCode}>
              확인
            </S.bottomButton>
      </S.page_su>
    );
}

export default SearchPw;