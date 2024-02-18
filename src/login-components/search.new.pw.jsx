import React from 'react';
import * as S from "../styled-components/signup.style"
import { useState , useEffect} from 'react';

function SearchNewPw() {
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
                <S.inputTitle>비밀번호</S.inputTitle>
                <S.inputwrap style={{padding: '2%'}}>
                    <S.input placeholder='영문,숫자 포함 8~15자리'/>
                </S.inputwrap>
                <S.inputwrap style={{padding: '2%'}}>
                    <S.input placeholder='비밀번호를 다시 입력해주세요.'/>
                </S.inputwrap>
            

            </S.contentWrap>
            <S.bottomButton disabled={true}>
              확인
            </S.bottomButton>
      </S.page_su>
    );
}

export default SearchNewPw;