import React from "react";
import hwasalpyo2 from "../../../MainPage/Image/hwasalpyo2.png";
import { Link } from "react-router-dom";

function QnA(){
    return(
        <div style={{height:"92vh", backgroundColor:"#f1f1f1"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/mypage">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"40vw",letterSpacing:"-1px", fontSize:"20px"}}>문의하기</h3>
            </div>
            <div style={{
                width:"96vw",
                height:"70vh",
                border:"0",
                borderRadius:"20px",
                marginTop:"3vh",
                boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)",
                backgroundColor:"white"
            }}>
                <input type="text" placeholder="제목을 입력해주세요." style={{width:"90vw",height:"5vh",marginTop:"8vh",paddingLeft:"5vw",border:"0",borderBottom: "0.5px solid #f1f1f1",fontSize:"16px",letterSpacing:"-0.2vw"}}/>
                <textarea type="text" placeholder="문의 내용을 입력해주세요." style={{width:"86vw",height:"39.5vh",paddingTop:"2vh",paddingBottom:"30vw",paddingLeft:"5vw",paddingRight:"5vw",border:"0",fontSize:"15px",fontFamily:"pretendard",letterSpacing:"-0.2vw"}}/>
            </div>
        </div>
    );
}

export default QnA;