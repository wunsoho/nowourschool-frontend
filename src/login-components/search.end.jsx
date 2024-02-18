import React from 'react';
import Checkmark from './Checkmark.png';
import * as S from "../styled-components/signup.style"

function SearchEnd(props) {
    return (
        <S.page_su>
            <S.titleWrap>
            아이디/비밀번호 찾기
            </S.titleWrap>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}> 
                <img className='icon' alt ='Checkmark' src={Checkmark} style={{width:'95px', height:'95px', marginTop:'25vh'}}/>   
                <S.titleWrap style={{fontSize: '20px', marginTop:'5vh' ,fontWeight: '800'}}>비밀번호 변경이 완료되었습니다!</S.titleWrap>
               
            </div>
        </S.page_su>
    );
}

export default SearchEnd;