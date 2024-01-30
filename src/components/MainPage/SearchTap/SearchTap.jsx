import React from "react";
import { Link } from "react-router-dom";
import hwasalpyo2 from "../Image/hwasalpyo2.png";
import search from "../Image/search.png";

function SearchTap(){
    return(
        <div>
            <Link to="/">
                <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"0.3vh", marginLeft:"2vw"}}/>
            </Link>
            <h3 style={{marginLeft:"43vw", fontSize:"20px"}}>검색</h3> 
            <div style={{
                width:"89vw",
                height:"5vh",
                marginBottom:"3vh",
                marginLeft:"1.5vw",
                paddingLeft:"3.5vw",
                alignItems:"center",
                border:"0",
                borderRadius:"20px",
                background:"var(--black-white-white, #FFF)",
                boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>
                <input type="text" placeholder="검색어를 입력하세요" style={{
                height:"4.7vh",
                marginLeft:"1.5vw",
                border:"0",
                fontSize:"16px"
                }}></input>
                <img src={search} alt="검색" style={{float:"right", width:"7vw", marginTop:"0.7vh", marginRight:"4vw"}}></img>
            </div>
            <div style={{marginLeft:"4vw",marginBottom:"10vh"}}>
                <h4 style={{color:"var(--main, #1FBC70)",fontFamily:"Pretendard",fontSize:"18px",fontWeight:"600",lineHeight:"1vw",letterSpacing:"-0.5px"}}>최근 검색어</h4>
                <p style={{fontSize:"16px",fontWeight:"400",letterSpacing:"-0.5px"}}>열린 열람실</p>
            </div>
        </div>
    );
}

export default SearchTap;