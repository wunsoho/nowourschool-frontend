import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FAQ() {
  const [sampleFAQ, setSampleFAQ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
          const result = await axios.get(
            'http://13.125.247.248:8080/api/v1/faq/sample',
            {
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiZW1haWwiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiaWF0IjoxNzA4MjUwOTY0LCJleHAiOjE3MDgyNTgxNjR9.JI4N0BnMxMvPesFK8axiz67jxhRHUIVVNdA9f1hks7g",
              },
            }
          );
          if (result.data.isSuccess === true) {
            setSampleFAQ(result.data.result.list);
            console.log(sampleFAQ);
          } else {
            console.error("서버 응답 오류:", result.data.message);
          }
        } catch (error) {
          console.error("서버 요청 오류:", error);
        }
      };
    fetchData();
  }, []);

  const handleAllViewClick = () => {
    navigate('/faq');
  };

  return(
    <div style={{marginTop:"3vh" ,marginBottom:"11vh",marginLeft:"2vw", lineHeight:"3vw", fontFamily: "Pretendard"}}>
        <h4 style={{fontSize:"18px", display:"inline-block", marginBottom:"1vh"}}>FAQ</h4>
        <p onClick={handleAllViewClick} style={{fontSize:"12px", float: "Right", marginTop:"2.5vh", marginRight:"3vw",color:"#414247",fontWeight: "400"}}>전체보기</p>
        {sampleFAQ.map((faq) => (
          <li
            style={{fontSize:"15px", margin: "10px 5px"}}
            id={faq.id}
          >{faq.title}</li>
        ))}
    </div>
);
}
