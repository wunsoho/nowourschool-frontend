import React from "react";
import CheckMark from "../../../Image/Checkmark.png";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Complete2(){

    const navigate = useNavigate();
    const onClickImg = () => {
        navigate('/login');
    }

    return(
        <div style={{backgroundColor:"#ffffff",height:"95vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <h3 style={{marginLeft:"40vw",letterSpacing:"-1px", fontSize:"20px"}}>회원탈퇴</h3>
            </div>
            <div>
                <img onClick={onClickImg} src={CheckMark} alt="완료 표시" style={{marginTop:"25vh",marginBottom:"1vh",marginRight:"33.5vw",marginLeft:"34.5vw"}}/>
                <h4 style={{width:"65vw",marginLeft:"22.7vw",marginRight:"22vw",fontSize:"19px",letterSpacing:"-0.3vw"}}>회원탈퇴가 완료되었습니다!</h4>
            </div>
        </div>
    );
}

export default Complete2;