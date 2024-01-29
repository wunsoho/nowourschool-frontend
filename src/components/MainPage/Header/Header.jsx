import React from "react";
import alert from "../Image/alert.png";
import search from "../Image/search.png";

function Header()   {
    return(
        <div>
            <h3 style={{display:"inline-block",marginLeft:"32vw",color:"#1FBC70"}}>지금 우리 학교는</h3>
                <img src={search} alt="검색" style={{float:"right", marginTop:"1.5vh", marginRight: "3vw"}}/>
            <img src={alert} alt="알림" style={{float:"right", marginTop:"1.5vh", marginRight: "4vw"}}/>
        </div>
    );
}

export default Header;