import React from 'react';
import * as S from '../styled-components/signup.style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Signup3() {
    return (
        <S.page_su>
        <S.titleWrap>
          학교 검색
        </S.titleWrap>
  
        <S.contentWrap>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <S.inputwrap style={{display:'flex'}}>
              <S.input placeholder="학교명을 입력해주세요." style={{marginTop: '0.3vh'}}/>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginTop: '0.7vh'}}/>
            </S.inputwrap>
          </div>

        </S.contentWrap>
      </S.page_su>
    );
  }

export default Signup3;