import React from 'react';
import * as S from "../styled-components/signup.style"
import { useState , useEffect} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';


function SearchNewPw() {
    const navigate = useNavigate();

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { state = {} } = useLocation();
    const { userId, email, authCode } = state;
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };

      useEffect(() => {
        // 페이지가 로드될 때 activeLink를 초기화합니다.
        setActiveLink(window.location.pathname);
      }, []);

      const handleSubmit = async () => {
        const data = {
          userId: userId,
          email: email,
          authCode: authCode,
          password: password
        };
    
        try {
          const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/find-password', data);
      
          if (response.data.isSuccess) {
            console.log('비밀번호 찾기 인증 성공');
            navigate('/searchpwend')
            // 성공 처리 로직
            
          } else {
            console.error('API 요청 실패:', response.data.message);
            // 실패 처리 로직
          }
        } catch (error) {
          console.error('API 요청 중 오류 발생', error);
          console.log(data)
          // 오류 처리 로직
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
            <div style={{marginTop: '2vh', textAlign:'center', fontSize:'16px', color:'#414247'}}>새로운 비밀번호를 입력해주세요.</div>

            <S.contentWrap style={{marginTop:'3vh'}}>
                <S.inputTitle>비밀번호</S.inputTitle>
                <S.inputwrap style={{padding: '2%'}}>
                    <S.input 
                    placeholder='영문,숫자 포함 8~15자리'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    
                </S.inputwrap>
                <S.inputwrap style={{padding: '2%'}}>
                    <S.input 
                    placeholder='비밀번호를 다시 입력해주세요.'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                </S.inputwrap>
            

            </S.contentWrap>
            <S.bottomButton onClick={handleSubmit} disabled={!password || !confirmPassword}>
              확인
            </S.bottomButton>
      </S.page_su>
    );
}

export default SearchNewPw;