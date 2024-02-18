import React from 'react';
import * as S from "../styled-components/signup.style"
import { useState, useEffect } from 'react';

function SearchPw() {
    const [activeLink, setActiveLink] = useState('');

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
                    <S.input placeholder='가입된 아이디를 입력해주세요.'/>
                </S.inputwrap>
            
                <S.inputTitle>학교이메일</S.inputTitle>
                <div style={{display: 'flex', textAlign: 'center'}}>
                    <S.inputwrap2>
                    <S.input2 placeholder="이메일" />
                    </S.inputwrap2>
                    <S.Button2 disabled={true} >인증요청</S.Button2>
                </div>

                <S.inputwrap style={{padding:'2%'}}>
                    <S.input  placeholder='인증번호 입력' />
                </S.inputwrap>
            

            </S.contentWrap>
            <S.bottomButton disabled={true}>
              확인
            </S.bottomButton>
      </S.page_su>
    );
}

export default SearchPw;