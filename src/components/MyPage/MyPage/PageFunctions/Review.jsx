import React from "react";
import * as R from "./Style/Review.style";
import SoGangDang from "../../Image/SoGangDang.png";
import Openclass from "../../Image/OpenClass.png";

function Review(){
    return(
        <div>
            <h3 style={{display:"flex",justifyContent:"center"}}>리뷰 관리</h3>

            <div style={{backgroundColor: "#FFFFFF", width:"96vw", height:"6vh"}}>
                <p style={{float:"left", marginLeft:"12vw"}}>리뷰 작성하기</p>
                <p style={{float:"right", marginRight:"16.5vw"}}>작성한 리뷰</p>
            </div>
            <div style={{
                width:"96vw",
                height:"21vh",
                marginTop:"3vh",
                backgroundColor:"#FFFFFF",
                borderRadius:"20px",
                boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"
            }}>
                <p style={{float:"left", margin:"2vw",marginLeft:"4vw",stroke: "var(--gray3, #F1F1F1)"}}>이용일 <span style={{fontWeight:"600"}}>2023.06.17</span></p><br/><br/>
                <div
                style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "0.5px solid #f1f1f1",
                }}/>
                <img src={SoGangDang} alt="소강당" style={{float:"left", width: "30vw", margin:"3vw",marginTop:"4vw"}}/>
                <div style={{float:"left", marginTop:"2vh",lineHeight:"5vw"}}>
                    <p style={{fontWeight:"600", fontSize:"18px"}}>학생회관 소강당</p>
                    <p style={{marginBottom:"3vw"}}>22호관 지하 1F</p>
                </div>
                <button style={{float:"right",marginTop:"0",marginRight:"2.5vw",width:"29vw",height:"3.3vh",backgroundColor:"#1FBC70",border:"0",borderRadius:"20px",fontSize:"14px",fontWeight:"400",color:"white"}}>리뷰 작성</button>
            </div>
        </div>
    );
}

export default Review;