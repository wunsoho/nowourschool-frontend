import * as S from "../styled-components/signup.style"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup1() {
  const [juminFront, setJuminFront] = useState('');
  const [juminBack, setJuminBack] = useState('');
  const [name, setName] = useState('');

  const handleNameInputChange = (event) => {
    const {value} = event.target;
    setName(value);
  };

  const handleFrontInputChange = (event) => {
    const {value} = event.target;
    setJuminFront(value);
  };

  const handleBackInputChange = (event) => {
    const {value}  = event.target;
    setJuminBack(value);
  };

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/signup2', { state: { name: name, identifyNum: juminFront + juminBack } });
  };



  return (
    <S.page_su>
      <S.titleWrap>
        본인 인증
      </S.titleWrap>

      <S.contentWrap>
        <S.inputTitle>이름</S.inputTitle>
      
        <S.inputwrap>
          <S.input
           type="text"
           value={name}
           onChange={handleNameInputChange}
           placeholder="이름을 입력해주세요."/>
        </S.inputwrap>

        <S.inputTitle style={{ marginTop: '3vh' }}>주민등록번호</S.inputTitle>
        
        <S.inputwrap>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.input
              type="text"
              value={juminFront}
              onChange={handleFrontInputChange}
              placeholder="생 년 월 일"
              maxLength={6}
              
            />
            <span style={{ marginRight: '50px' }}>-</span>
            <S.input
              type="password"
              value={juminBack}
              onChange={handleBackInputChange}
              placeholder="* * * * * * *"
              maxLength={7}
            />
          </div>
        </S.inputwrap>
      </S.contentWrap>
      <S.bottomButton onClick={handleConfirm} disabled={!name || !juminFront || !juminBack}>
        확인
      </S.bottomButton>
    </S.page_su>
  );
}

export default Signup1;
