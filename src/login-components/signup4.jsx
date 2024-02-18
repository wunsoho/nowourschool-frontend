import React from 'react';
import * as S from "../styled-components/signup.style"

function Signup4() {
    return (
        <S.page_su>
            <S.titleWrap>
                프로필 생성
            </S.titleWrap>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'10vh'}}>
            <S.profile/>
        </div>
        <S.CircleButton>
            <S.CircleIcon />
            <S.PlusIcon />
        </S.CircleButton>
       
        <S.contentWrap>
            <S.inputTitle>닉네임</S.inputTitle>
            <S.inputwrap style={{padding:'2%'}}>
                <S.input placeholder="닉네임을 입력해주세요." />
            </S.inputwrap>
        </S.contentWrap>
        <S.bottomButton disabled={true}>
            확인
        </S.bottomButton>
    </S.page_su>
  );
}

export default Signup4;