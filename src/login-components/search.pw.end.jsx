import React from 'react';
import Checkmark from './Checkmark.png';
import * as S from "../styled-components/signup.style"
import { useNavigate } from 'react-router-dom';


function SearchPwEnd() {
    const navigate = useNavigate();
    const LoginButton = () => {
        navigate('/');
      };


    return (
        <S.page_su>
            <S.titleWrap>
            아이디/비밀번호 찾기
            </S.titleWrap>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}> 
                <img className='icon' alt ='Checkmark' src={Checkmark} style={{width:'95px', height:'95px', marginTop:'25vh'}}/>   
                <S.titleWrap style={{fontSize: '20px', marginTop:'5vh' ,fontWeight: '800'}}>비밀번호 변경이 완료되었습니다!</S.titleWrap>
               
            </div>
            <S.bottomButton onClick={LoginButton} style={{marginTop:'35vh'}}>
        <div style={{color:'white'}}>로그인</div>
      </S.bottomButton>
        </S.page_su>
        
    );
}

export default SearchPwEnd;