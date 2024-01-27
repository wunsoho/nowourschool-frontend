import React from "react";
import { Right } from "../ProfileBox/Style/profile.style";

function Notice(){
    return(
        <div style={{marginBottom:"3vh",marginLeft:"2vw", lineHeight:"3vw"}}>
                <h4 style={{fontSize:"18px", display:"inline-block", marginBottom:"1vh"}}>공지사항</h4>
                <p style={{fontSize:"12px", float: "Right", marginTop:"2.5vh", marginRight:"3vw",color:"#414247",fontWeight: "400"}}>전체보기</p>
                <p style={{fontSize:"15px"}}>• 2023 겨울계절학기 수강 안내</p>
                <p style={{fontSize:"15px"}}>• 이번 방학은 돈 받으면서 공부하자! 전탐기</p>
                <p style={{fontSize:"15px"}}>• 겨울학기 글말스쿨 개강</p>
                <p style={{fontSize:"15px"}}>• 비전공자를 위한 빅데이터 분석 및 인공지능 교육</p>
        </div>
    );
}

export default Notice;