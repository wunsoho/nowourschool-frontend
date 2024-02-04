import React from "react";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import ChangePassword from "../../../Image/ChangePassword.png";
import AccountBox from "../../../Image/AccountBox.png";
import LogOut from "../../../Image/Logout.png";
import { Link } from "react-router-dom";

function Account(){
    return(
        <div style={{height:"92vh",lineHeight:"2.5vh",backgroundColor:"#F1F1F1"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/mypage">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"36vw",letterSpacing:"-1px", fontSize:"20px"}}>계정 관리</h3>
            </div>

            <div style={{
                width:"98vw",
                borderBottom: "0.5px solid #BBBBBB",
                marginTop:"8vh"
            }}>
                <img src={ChangePassword} alt="비밀번호 변경" style={{float:"left",marginLeft:"8vw",marginRight:"3vw"}}/>
                <Link to="/changepassword" style={{textDecoration:"none"}}>
                    <h4 style={{
                    marginLeft: "4.3vw",
                    color: "black",
                    letterSpacing:"-0.4vw"}}>비밀번호 변경</h4>
                </Link>
            </div>
            
            <div style={{
                width:"98vw",
                borderBottom: "0.5px solid #BBBBBB"
            }}>
                <img src={AccountBox} alt="회원 탈퇴" style={{float:"left",marginLeft:"8vw",marginRight:"3vw"}}/>
                <Link to="/withdraw" style={{textDecoration:"none"}}>
                    <h4 style={{
                    marginLeft: "4.3vw",
                    color: "black",
                    letterSpacing:"-0.4vw"}}>회원 탈퇴</h4>
                </Link>
            </div>
            
            <div style={{
                width:"98vw",
                borderBottom: "0.5px solid #BBBBBB"
            }}>
                <img src={LogOut} alt="로그아웃" style={{float:"left",marginLeft:"8vw",marginRight:"3vw"}}/>
                <Link to="/logout" style={{textDecoration:"none"}}>
                    <h4 style={{
                    marginLeft: "4.3vw",
                    color: "black",
                    letterSpacing:"-0.4vw"}}>로그아웃</h4>
                </Link>
            </div>
        </div>
    );
}

export default Account;