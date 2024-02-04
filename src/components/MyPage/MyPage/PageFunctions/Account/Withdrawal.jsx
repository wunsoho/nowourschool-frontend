import React from "react";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import { Link, useNavigate } from "react-router-dom";


function Withdrawal(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/withdraw'+'/complete');
    }

    return(
        <div>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/account">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"40vw",letterSpacing:"-1px", fontSize:"20px"}}>회원탈퇴</h3>
            </div>
            <p style={{marginTop:"3vh",marginLeft:"22vw",fontSize:"12px",letterSpacing:"-0.3vw"}}>본인인증을 위해 현재 비밀번호를 입력해주세요.</p>
            <div style={{marginTop:"5vh",display:""}}>
                <h3 style={{marginBottom:"1vh",marginLeft:"3vw",fontSize:"18px"}}>현재 비밀번호</h3>
                <div>
                    <input type="text" placeholder="영문,숫자 포함 8~15자리" style={{width:"89vw",height:"6vh",backgroundColor:"#f1f1f1",marginBottom:"1vh",marginLeft:"2vw",paddingLeft:"3vw",border:"0",borderRadius:"10px",fontSize:"15px"}}/>
                    <input type="password" placeholder="비밀번호를 다시 입력해주세요." style={{width:"89vw",height:"6vh",backgroundColor:"#f1f1f1",marginLeft:"2vw",paddingLeft:"3vw",border:"0",borderRadius:"10px",fontSize:"15px"}}/>
                </div>
            </div>
            <button onClick={handleClick} type="submit" style={{position:"relative",width:"92vw",height:"7vh",marginTop:"45vh",marginLeft:"2vw",color:"white",fontWeight:"700",fontSize:"17px",border:"0",backgroundColor:"#1FBC70",borderRadius:"4.7vw",boxShadow:"none"}}>회원탈퇴</button>
        </div>
    );
}

export default Withdrawal;