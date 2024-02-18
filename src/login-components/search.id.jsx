import React from 'react';
import * as S from "../styled-components/signup.style"

function SearchId() {
    return (
        <S.page_su>
            <S.titleWrap>
            아이디/비밀번호 찾기
            </S.titleWrap>
            <S.contentWrap>
              <S.IdBox>
                <p style={{textAlign: 'center', paddingTop: '50px' ,fontSize:'15px'}}>회원님의 정보와 일치하는 아이디입니다.</p>
                <p style={{textAlign: 'center', marginBottom:'0', paddingTop: '30px' ,  paddingBottom: '0',fontWeight:'700', color:'#1FBC70'}}>아이디 : UMC_1234</p>
                <p style={{textAlign: 'center' , marginTop:'0', paddingTop: '0', fontWeight:'700'}}>가입일 : 2023.12.30</p>
              </S.IdBox>
            </S.contentWrap>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10vh'}}>
            <S.SearchIdButtonL>비밀번호 찾기</S.SearchIdButtonL>
            <S.SearchIdButtonR>로그인</S.SearchIdButtonR>
            </div>
        </S.page_su>

        
    );
}

export default SearchId;