import React from 'react';
import Fire from './fire.png'
import * as S from "../styled-components/signup.style"


function Signup5() {
    return (
        <S.page_su>
            <S.titleWrap>
            회원가입 완료
            </S.titleWrap>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}> 
                <img className='icon' alt ='Fire' src={Fire} style={{width:'95px', height:'95px', marginTop:'25vh'}}/>   
                <S.titleWrap style={{fontSize: '20px', marginTop:'8vh' ,fontWeight: '800'}}>회원가입이 완료되었습니다!</S.titleWrap>
                <S.titleWrap style={{fontSize: '15px', marginTop:'3vh', fontWeight: '500'}}>지금 우리 학교는과 함께 <br/>쉽고 간편하게 시설을 예약해보세요.</S.titleWrap>
            </div>
        </S.page_su>

    );
}

export default Signup5;