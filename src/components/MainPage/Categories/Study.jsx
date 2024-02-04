import React from "react";
import { Link } from "react-router-dom";
import hwasalpyo2 from "../Image/hwasalpyo2.png";
import OpenClass from "../Image/OpenClass.png";

function Study(){

    return(
        <div>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{display:"flex",justifyContent:"center",marginRight:"6vw",fontWeight:"700",fontSize:"20px",letterSpacing:"-0.4vw"}}>스터디</h3>
            </div>
            {/* ui 구현은 했는데 스크롤로 했을 때 글자가 안뜨는 것을 고쳐야됨 */}
            <div style={{display:"flex", marginBottom:"2vh"}}>
                <img src={OpenClass} alt="열린 열람실" style={{width:"96vw", position:"relative",verticalAlign:"middle"}}/>
                <p style={{position:"absolute",top:"32.3vh",margin:"0",marginLeft:"2vw",color:"white",letterSpacing:"-0.3vw",fontWeight:"600",fontSize:"16px"}}>독서실 분위기의 공부공간</p>
                <p style={{position:"absolute",top:"31vh",right:"5vw",margin:"0",color:"white",fontWeight:"800",fontSize:"28px",letterSpacing:"-0.3vw"}}>열린 열람실</p>
            </div>
        </div>
    );
}

export default Study;