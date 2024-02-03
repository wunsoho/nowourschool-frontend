import React from "react";
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
    return(
        <div style={{fontFamily: "Pretendard",backgroundColor:"#f9f9f9"}}>
            <div style={{marginTop:"3vh",marginBottom:"4vh"}}>
                <Link to="/">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"0.3vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"36vw",letterSpacing:"-1px", fontSize:"20px"}}>열람실 현황</h3>
            </div>
            <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",margin:"2vw",marginTop:"4vw",marginLeft:"4.5vw",fontFamily:"pretendard"}}>열린열람실</h3>
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