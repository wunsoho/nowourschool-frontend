import React from "react";
import CheckMark from "../../../Image/Checkmark.png";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import { Link } from "react-router-dom";

function Complete1(){
    return(
        <div style={{backgroundColor:"#ffffff",height:"95vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/account">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"34.5vw",letterSpacing:"-1px", fontSize:"20px"}}>비밀번호 변경</h3>
            </div>
            <div>
                <img src={CheckMark} alt="완료 표시" style={{marginTop:"25vh",marginBottom:"1vh",marginRight:"33.5vw",marginLeft:"34.5vw"}}/>
                <h4 style={{width:"65vw",marginLeft:"17vw",marginRight:"17vw",fontSize:"19px",letterSpacing:"-0.3vw"}}>비밀번호 변경이 완료되었습니다!</h4>
            </div>
        </div>
    );
}

export default Complete1;