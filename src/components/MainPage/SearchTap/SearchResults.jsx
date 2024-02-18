import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import search2 from "../Image/search2.png";
import StudentsSogangdang from "../Image/StudentsSogangdang.png";
import hwasalpyo3 from "../Image/hwasalpyo3.png";
import x from "../Image/x.png";
import styled from "styled-components";
import axios from "axios";

function SearchResults(){

    const {state} = useLocation();
    const navigate = useNavigate();

    const [queries2, setQueries2] = useState(state.title["queries1"]);

    const changeState = () =>{
        setQueries2("");
    }

    const [facilityData, setFacilityData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
              const result = await axios.get(
                'http://localhost:8080/api/v1/facility/search?query=카페&page=1',
                {
                  headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiZW1haWwiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiaWF0IjoxNzA4MjUwOTY0LCJleHAiOjE3MDgyNTgxNjR9.JI4N0BnMxMvPesFK8axiz67jxhRHUIVVNdA9f1hks7g",
                  },
                }
              );
              if (result.data.isSuccess === true) {
                setFacilityData(result.data.result.list);
                console.log(facilityData);
              } else {
                console.error("서버 응답 오류:", result.data.message);
              }
            } catch (error) {
              console.error("서버 요청 오류:", error);
            }
          };
        fetchData();
      }, []);
    

    return(
      <div style={{backgroundColor:"white", height:"100vh"}}>
        <div>
            <Box>
                <Input value={queries2} onChange={(e) => setQueries2(e.target.value)} type="text" placeholder="검색어를 입력하세요"/>

                <img src={search2} alt="검색" style={{float:"right", width:"5vw", marginTop:"1.5vh", marginRight:"4vw"}}></img>
                <img onClick={changeState} src={x} alt="지우기" style={{float:"right",width:"4vw",marginTop:"1.7vh",marginRight:"2.5vw"}}/>
            </Box>
            <Link to="/search" style={{textDecoration:"none"}}>
                <p style={{float:"right", marginRight:"7vw",marginTop:"4.4vh",textDecoration:"none"}}>취소</p>
            </Link>
        </div>
        
        {facilityData.map((fd) => (
            <div style={{display:"table",marginBottom:"2vh"}}>
                <img src={fd.imageURL} alt={fd.buildingName} style={{float:"left", margin:"2vw",marginBottom:"0"}}/>
                <img src={hwasalpyo3} alt="화살표" style={{float:"right",width:"6.5vw",marginTop:"2.5vh",marginRight:"4vw"}}/>
                <div style={{display:"inline-blcok",float:"left",paddingTop:"1vh",lineHeight:"2vw",letterSpacing:"-0.5px"}}>
                    <h4 style={{fontSize:"18px"}}>{fd.name}</h4>
                    <p style={{fontSize:"14px"}}>{fd.buildingName}</p>
                    <p style={{fontSize:"14px"}}>{fd.openingTime} ~ {fd.closingTime}</p>
                </div>
                <button style={{float:"right",width:"30vw",height:"3.5vh",marginTop:"-1vh",marginRight:"6vw",color:"white",fontSize:"12px",border:"0",borderRadius:"20px",backgroundColor:"#1FBC70"}}>예약하기</button>
            </div>
        ))}
      </div>
    );
}

export default SearchResults;

const Box = styled.div`
    display: inline-block;
    width: 70vw;
    height: 5.5vh;
    margin-Top: 3vh;
    margin-Bottom: 3vh;
    margin-Left: 1.5vw;
    padding-Left: 3.5vw;
    align-Items: center;
    border: 0;
    border-Radius: 20px;
    background-Color: #f1f1f1;
`;

const Input = styled.input`
    width: 50vw;
    height: 4.7vh;
    margin-Left: 1.5vw;
    padding-Top: 1vw;
    border: 0;
    font-Size: 16px;
    background-Color: #f1f1f1;
`;