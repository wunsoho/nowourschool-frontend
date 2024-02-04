import React from "react";
import hwasalpyo2 from "../../../MainPage/Image/hwasalpyo2.png";
import PlusMark from "../../Image/+.png";
import { Link } from "react-router-dom";

function Personalnfo(){
    return(
        <div style={{height:"100vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/mypage">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"36vw",letterSpacing:"-1px", fontSize:"20px"}}>개인정보 수정</h3>
            </div>

            <div style={{width:"35vw",height:"35vw",marginLeft:"34vw",backgroundColor:"#f1f1f1",borderRadius:"20vw"}}>
                <div style={{float:"right",width:"8.5vw",height:"8.5vw",marginTop:"12vh",marginRight:"2vw",backgroundColor:"#bbbbbb",borderRadius:"5vw"}}>
                    <img src={PlusMark} alt="플러스" style={{marginLeft:"2.4vw",marginTop:"1.1vh"}}/>
                </div>
            </div>

            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>이름</h4>
                <input type="text" placeholder="홍길동" style={{width:"83vw",height:"6vh",marginLeft:"3vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>닉네임</h4>
                <input type="text" placeholder="메롱고양이" style={{width:"83vw",height:"6vh",marginLeft:"3vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>학교</h4>
                <input type="text" placeholder="울산대학교" style={{width:"83vw",height:"6vh",marginLeft:"3vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>전공</h4>
                <input type="text" placeholder="디지털콘텐츠디자인학과" style={{width:"83vw",height:"6vh",marginLeft:"3vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>학년</h4>
                <input type="text" placeholder="1" style={{width:"83vw",height:"6vh",marginLeft:"3vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            
        </div>
    );
}

export default Personalnfo;