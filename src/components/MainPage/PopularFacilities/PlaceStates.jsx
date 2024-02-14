import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import hwasalpyo2 from "../Image/hwasalpyo2.png";
import NoGauge from "./Gauges/PlaceStatesVersion/NoGauge";
import OneFourGauge from "./Gauges/PlaceStatesVersion/OneFourGauge";
import HalfGauge from "./Gauges/PlaceStatesVersion/HalfGauge";
import ThreeFourGauge from "./Gauges/PlaceStatesVersion/ThreeFourGauge";
import FullGauge from "./Gauges/PlaceStatesVersion/FullGauge";
import info from "../Image/Info.png";

function PlaceStates() {

    const [facilityData, setFacilityData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              // 토큰으로 401 오류 뜨는데 토큰 확인 부탁해야됨
              const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiZW1haWwiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiaWF0IjoxNzA2OTY2Mjc5LCJleHAiOjE3MDY5NzM0Nzl9.4fTxllAYKAjhHQzgkqblvVA2jq9hUB2MOb5Cjj30Bqk';
              const response = await fetch(`http://13.125.247.248:8080/api/v1/facility/library`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`,
                },
              });
      
              if (response.ok) {
                const data = await response.json();
                setFacilityData(data.result);
              } else {
                console.error('Failed to fetch facility data');
              }
            } catch (error) {
              console.error('Error fetching facility data:', error);
            }
          };
          fetchData();
    },[]);
    useEffect(() => {
    },[facilityData]);
  
    return(
        <div style={{fontFamily: "Pretendard",backgroundColor:"#f9f9f9"}}>
            <div style={{marginTop:"3vh",marginBottom:"4vh"}}>
                <Link to="/">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"0.3vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"36vw",letterSpacing:"-1px", fontSize:"20px"}}>열람실 현황</h3>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",margin:"2vw",marginTop:"4vw",marginLeft:"4.5vw",fontFamily:"pretendard"}}>{facilityData && facilityData.list.name}</h3>
                <p style={{float:"left", margin:"2vw",marginTop:"4.8vw",marginLeft:"0",fontSize:"14px",letterSpacing:"-1px"}}>신관도서관 1F</p>
                <NoGauge/>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",margin:"2vw",marginTop:"4vw",marginLeft:"4.5vw",fontFamily:"pretendard"}}>열린열람실</h3>
                <p style={{float:"left", margin:"2vw",marginTop:"4.8vw",marginLeft:"0",fontSize:"14px",letterSpacing:"-1px"}}>신관도서관 1F</p>
                <OneFourGauge/>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",margin:"2vw",marginTop:"4vw",marginLeft:"4.5vw",fontFamily:"pretendard"}}>열린열람실</h3>
                <p style={{float:"left", margin:"2vw",marginTop:"4.8vw",marginLeft:"0",fontSize:"14px",letterSpacing:"-1px"}}>신관도서관 1F</p>
                <HalfGauge/>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",margin:"2vw",marginTop:"4vw",marginLeft:"4.5vw",fontFamily:"pretendard"}}>열린열람실</h3>
                <p style={{float:"left", margin:"2vw",marginTop:"4.8vw",marginLeft:"0",fontSize:"14px",letterSpacing:"-1px"}}>신관도서관 1F</p>
                <ThreeFourGauge/>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",margin:"2vw",marginTop:"4vw",marginLeft:"4.5vw",fontFamily:"pretendard"}}>열린열람실</h3>
                <p style={{float:"left", margin:"2vw",marginTop:"4.8vw",marginLeft:"0",fontSize:"14px",letterSpacing:"-1px"}}>신관도서관 1F</p>
                <ThreeFourGauge/>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginTop:"12vh",backgroundColor:"#F1FFF3",border:"0",borderRadius:"5vw"}}>
                <img src={info} alt="알림사항" style={{float:"left",margin:"7.3vw",marginRight:"5vw"}}/>
                <p style={{marginTop:"2.7vh",fontSize:"14px",color:"#5ABD8D",lineHeight:"2vh",letterSpacing:"-0.3vw"}}>현재 페이지는 해당 시설의 간략정보만 제공합니다.<br/>&nbsp;&nbsp;열람실 배정은 클리커 앱을 이용하여 주십시요.</p>
            </div>
        </div>
    )
}

export default PlaceStates;