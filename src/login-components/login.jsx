import React, { useState } from 'react';
import axios from 'axios';
import * as S from "../styled-components/login.style"
import Account from "./Account circle.png"
import Lock from "./Lock.png"
import Logo from "./logo.png.2.png"

function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/login', {
                userId,
                password,
            });

            if (response.data.isSuccess) {
                // 로그인 성공 처리
                console.log(response.data.result.accessToken);
                console.log(response.data.result.refreshToken);
                console.log(response.data.message);
            } else {
                // 로그인 실패 처리
                console.log('로그인 실패!');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.page>
            <S.logoWrap>
                <img className='icon' alt='Logo' src={Logo}/>            
            </S.logoWrap>

            <S.contentWrap>
                <div className='id'>
                    <S.inputWrap style={{marginTop:'14vh'}}>
                    <img className='icon' alt ='Account' src={Account} style={{marginLeft: '4vw'}} />
                         <input style={{width: '100%', fontSize: '15px', border: 'none', outline: 'none', backgroundColor: '#F5F5F5', marginLeft: '8%' }}
                           placeholder='아이디'
                           value={userId}
                           onChange={(e) => setUserId(e.target.value)}
                           />
                    </S.inputWrap>
                    
                </div>
                <div className='pw'>
                    <S.inputWrap>
                    <img className='icon' alt = 'Lock' src={Lock} style={{marginLeft: '4vw'}}/>
                        <input style={{width: '100%', fontSize: '15px',border: 'none', outline: 'none', backgroundColor: '#F5F5F5', marginLeft: '8%'}}
                           placeholder='비밀번호'
                           type='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           />
                    </S.inputWrap>
                    
                </div>
            </S.contentWrap>

            <div>
                <S.bottomButton onClick={handleLogin} style={{marginTop:'3vh'}}>로그인</S.bottomButton>
            </div>
            <S.Bottom>
                <S.StyledLink to='/signup'>회원가입</S.StyledLink>
                <S.StyledLink to='/searchmain'>아이디/비밀번호 찾기</S.StyledLink>
            </S.Bottom>
        </S.page>
    );
}

export default Login;