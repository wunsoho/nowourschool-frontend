import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Notice() {
  const [sampleNoti, setSampleNoti] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
          const result = await axios.get(
            'http://13.125.247.248:8080/api/v1/announcement/sample',
            {
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiZW1haWwiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiaWF0IjoxNzA4MjUwOTY0LCJleHAiOjE3MDgyNTgxNjR9.JI4N0BnMxMvPesFK8axiz67jxhRHUIVVNdA9f1hks7g",
              },
            }
          );
          if (result.data.isSuccess === true) {
            setSampleNoti(result.data.result.list);
            console.log(sampleNoti);
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
    navigate('/notification');
  };

  const notiClick = (id) => {
    console.log(id);
    if (id !== null) {
      navigate('/notificationView', { state: { id } });
    }
  };

  return(
      <div style={{marginBottom:"6vh",marginLeft:"2vw", lineHeight:"3vw", fontFamily: "Pretendard"}}>
        <h4 style={{fontSize:"18px", display:"inline-block", marginBottom:"1vh"}}>공지사항</h4>
        <p onClick={handleAllViewClick} style={{fontSize:"12px", float: "Right", marginTop:"2.5vh", marginRight:"3vw",color:"#414247",fontWeight: "400"}}>전체보기</p>
        {sampleNoti.map((noti) => (
          <li
            onClick={() => notiClick(noti.id)}
            style={{fontSize:"15px", margin: "10px 5px", lineHeight: "2vh",letterSpacing:"-0.5vw"}}
            id={noti.id}
          >{noti.title}</li>
        ))}
    </div>
  );
}