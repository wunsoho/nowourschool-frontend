import React from "react";

function FAQ() {
    return(
        <div style={{marginTop:"3vh" ,marginBottom:"11vh",marginLeft:"2vw", lineHeight:"3vw", fontFamily: "Pretendard"}}>
            <h4 style={{fontSize:"18px", display:"inline-block", marginBottom:"1vh"}}>FAQ</h4>
            <p style={{fontSize:"12px", float: "Right", marginTop:"2.5vh", marginRight:"3vw",color:"#414247",fontWeight: "400"}}>전체보기</p>
            <p style={{fontSize:"15px"}}>• 시설물 예약은 어떻게 하나요?</p>
            <p style={{fontSize:"15px"}}>• 시설물 반납은 어떻게 하나요?</p>
            <p style={{fontSize:"15px"}}>• 시설물 연장은 어떻게 하나요?</p>
            <p style={{fontSize:"15px"}}>• 장소 도착 인증은 어떻게 하나요?</p>
        </div>
    );
}

export default FAQ;