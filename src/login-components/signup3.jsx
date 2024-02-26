import React from 'react';
import * as S from '../styled-components/signup.style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { throttle } from 'lodash';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Signup3() {
  const [schoolName, setSchoolName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  
  const { state = {} } = useLocation();
  
  
  const searchSchools = throttle(async () => {
    try {
      const response = await axios.get('http://13.125.247.248:8080/api/v1/auth/search-schools', {
        params: {
          query: schoolName
        }
      });

      if (response.data.isSuccess) {
        setSearchResults(response.data.result);
        console.log(response.data.message)  // 성공한 경우, 결과를 상태에 저장
      } else {
        console.log(response.data.message);  // 실패한 경우, 메시지 출력
      }
    } catch (error) {
      console.error(error);  // 에러 발생시, 에러 메시지 출력
    }
  }, 500);  // 500ms = 0.5초

  useEffect(() => {  // useEffect Hook을 사용하여 schoolName 상태의 변화를 감지
    if (schoolName) {  // schoolName 상태가 있을 경우에만 searchSchools 함수를 호출
      searchSchools();
    }
  }, [schoolName]);  // schoolName 상태가 변화할 때마다 useEffect 내의 함수를 호출

  const handleInputChange = (event) => {
    setSchoolName(event.target.value);
  };


  const handleSchoolClick =(schoolName) => {
    setSchoolName(schoolName);
    navigate('/signup2', { state: { ...state, schoolName } });

  }; 
  
    return (
        <S.page_su>
        <S.titleWrap>
          학교 검색
        </S.titleWrap>
  
        <S.contentWrap>
          <div style={{ alignItems: 'center'}}>
            <S.inputwrap style={{display:'flex', width:'86vw'}}>
              <S.input 
              placeholder="학교명을 입력해주세요."
              style={{marginTop: '0.3vh'}}
              value={schoolName} 
              onChange={handleInputChange}/>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginTop: '0.7vh'}}/>

            </S.inputwrap>
            <div style={{marginTop: '2vh', marginLeft:'1vh'}}>
              {searchResults.map((result) => (
                <div key={result.id} onClick={() => handleSchoolClick(result.name)}>{result.name}</div>
              ))}
            </div>
          </div>

        </S.contentWrap>
      </S.page_su>
    );
  }

export default Signup3;