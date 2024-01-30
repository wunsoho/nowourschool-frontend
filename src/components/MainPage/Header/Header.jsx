import React from "react";
import { Link } from "react-router-dom";
import alert from "../Image/alert.png";
import search from "../Image/search.png";

function Header()   {
    return(
        <div>
            <h3 style={{display:"inline-block",marginLeft:"31.5vw", color:"#1FBC70", fontSize:"20px"}}>지금 우리 학교는</h3>
            <Link to="/search" target="_self">
                <img src={search} alt="검색" style={{float:"right", marginTop:"1.5vh", marginRight: "3vw"}}/>
            </Link>
            
            <img src={alert} alt="알림" style={{float:"right", marginTop:"1.5vh", marginRight: "4vw"}}/>
        </div>
    );
}

export default Header;