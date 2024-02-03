import React from "react";
import ProfileImg from "../../Image/ProfileImg.png";
import hwasalpyo from "../../Image/hwasalpyo.png";
import { useNavigate } from "react-router-dom";

function Profile(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/personalinfo');
    }

    return(
        <div style={{
            display:"flex",
            width: "94.8vw",
            height: "13vh",
            backgroundColor: "white",
            border: "3px solid",
            borderRadius: "20px",
            marginTop: "7vh",
            marginBottom: "2vh",
            borderColor:"#1FBC70",
            color:"black",
            boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"
        }}>
            <img src={ProfileImg} alt="profileImg" style={{ height: "10vh", width: "22.3vw", marginLeft: "2.5vw", marginTop:"1.5vh", borderRadius:"75px"}}/>
            <div style={{
                lineHeight: "5vw",
                marginTop:"0.7vh",
                marginLeft: "4vw"
            }}>
                <p style={{fontSize:"22px",fontWeight:"700",letterSpacing:"-0.5px"}}>홍길동</p>
                <p style={{color:"#414247", fontSize:"16px",fontWeight:"550",letterSpacing:"-0.1em"}}>디지털콘텐츠디자인학과 / 3학년</p>
            </div>
            <img onClick={handleClick} src={hwasalpyo} alt="nexttag" style={{height:"3vh",marginLeft:"5vw",marginTop:"2.6vh"}}/>
        </div>
    );
}

export default Profile;