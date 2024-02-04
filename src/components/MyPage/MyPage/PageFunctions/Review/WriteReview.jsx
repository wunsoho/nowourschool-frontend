import React from "react";
import { Link } from "react-router-dom";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import SoGangDang from "../../../Image/SoGangDang.png";
import StarRating from "./StarRating/StarRating";


function WriteReview(){
    return(
        <div>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/review">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{display:"flex",justifyContent:"center",fontWeight:"700",fontSize:"20px",letterSpacing:"-0.4vw"}}>리뷰 작성</h3>
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
            <div
            style={{
            width: "100%",
            textAlign: "center"
            }}/>
                <div style={{display:"table"}}>
                    <img src={SoGangDang} alt="소강당" style={{float:"left", width: "15vw", margin:"3vw",marginTop:"3vh",borderRadius:"vw"}}/>
                    <div style={{float:"left", marginTop:"3vh",marginRight:"10vw",lineHeight:"5vw"}}>
                        <p style={{fontWeight:"600", fontSize:"16px",letterSpacing:"-0.4vw",lineHeight:"0"}}>학생회관 소강당</p>
                        <p style={{marginBottom:"3vw",letterSpacing:"-0.3vw"}}>22호관 지하 1F</p>
                    </div>
                </div>
                <div style={{display:"table",xwidth:"100%",height:"10vh",backgroundColor:"10vh",borderTop:"0.5px solid #f1f1f1"}}>
                    <StarRating/>
                </div>
                <textarea type="text" placeholder="내용을 입력하세요." style={{width:"86vw",height:"10vh",paddingTop:"2vh",paddingBottom:"10vw",paddingLeft:"5vw",paddingRight:"5vw",border:"0",borderTop:"0.5px solid #f1f1f1",fontSize:"15px",fontFamily:"pretendard",letterSpacing:"-0.2vw"}}/>
                <div>
                    {/* 사진 업로드하는 코드 넣기 */}
                </div>
            </div>
        </div>
    );
}

export default WriteReview;