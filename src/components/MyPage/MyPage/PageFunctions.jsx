import React from "react";
import { Link } from "react-router-dom";
import Booking from "../Image/Booking.png";
import QnA from "../Image/QnA.png";
import Review from "../Image/Review.png";
import Account from "../Image/Account.png";

function PageFunctions(){
    return(
        <div style={{
            display:"flex",
            borderRadius:"20px",
            boxShadow:"0px 1px 3.5px 0px rgba(0,0,0,0.25)",
            width:"95.5vw",
            height:"35vh",
            flexDirection:"column",
            lineHeight:"4vh"
        }}>
            <Link to="/booking" style={{marginLeft:"4vw", marginTop:"2vh", textDecoration: "none"}}>
                <img src={Booking} alt="예약" style={{float:"left", marginTop:"2.7vh"}}/>
                <p style={{marginLeft:"7vw", letterSpacing:"-0.1em", fontWeight:"600", fontSize:"18px", color:"#414247"}}>예약내역</p>
            </Link>
            <Link to="/qna" style={{marginLeft:"4vw", textDecoration: "none"}}>
                <img src={QnA} alt="문의" style={{float:"left", marginTop:"2.7vh"}}/>
                <p style={{marginLeft:"7vw", letterSpacing:"-0.1em", fontWeight:"600", fontSize:"18px", color:"#414247"}}>문의하기</p>
            </Link>
            <Link to="/review" style={{marginLeft:"4vw", textDecoration: "none"}}>
                <img src={Review} alt="리뷰" style={{float:"left", marginTop:"2.7vh"}}/>
                <p style={{marginLeft:"7vw", letterSpacing:"-0.1em", fontWeight:"600", fontSize:"18px", color:"#414247"}}>리뷰 관리</p>
            </Link>
            <Link to="/account" style={{marginLeft:"4vw", textDecoration: "none"}}>
                <img src={Account} alt="계정"   style={{float:"left", marginTop:"2.7vh"}}/>
                <p style={{marginLeft:"7vw", letterSpacing:"-0.1em", fontWeight:"600", fontSize:"18px", color:"#414247"}}>계정 관리</p>
            </Link>
        </div>
    );
}

export default PageFunctions;