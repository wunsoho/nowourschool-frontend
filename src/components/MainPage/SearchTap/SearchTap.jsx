import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hwasalpyo2 from "../Image/hwasalpyo2.png";
import search1 from "../Image/search1.png";
import X from "../Image/X.png";

function SearchTap(){

    const [queries1, setQueries1] = useState("");
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate(`/results`,{
            state: {
                title: {queries1}
            }});
    };


    const [Delete,setDelete] = useState('');

    const changeState = () => {
        setDelete('none');
    }

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
                <input type="text" placeholder="검색어를 입력하세요" value={queries1} onChange={(e) => setQueries1(e.target.value)} style={{
                height:"4.7vh",
                marginLeft:"1.5vw",
                border:"0",
                fontSize:"16px"
                }}></input>
                <img onClick={onClickImg} src={search1} alt="검색" style={{float:"right", width:"7vw", marginTop:"0.7vh", marginRight:"4vw"}}></img>
            </div>
            <div style={{marginLeft:"4vw",marginBottom:"10vh"}}>
                <h4 style={{color:"var(--main, #1FBC70)",fontFamily:"Pretendard",fontSize:"18px",fontWeight:"600",lineHeight:"1vw",letterSpacing:"-0.5px"}}>최근 검색어</h4>
                <p style={{display:`${Delete}`,width:"30vw",fontSize:"16px",fontWeight:"400",letterSpacing:"-0.3vw"}}>열린 열람실<img onClick={changeState} src={X} style={{marginTop:"1vw",marginLeft:"2vw"}}></img></p>
            </div>
        </div>
    );
}

export default SearchTap;