import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import search2 from "../Image/search2.png";
import StudentsSogangdang from "../Image/StudentsSogangdang.png";
import hwasalpyo3 from "../Image/hwasalpyo3.png";
import { queries } from "@testing-library/react";
import x from "../Image/x.png";

function SearchResults(){

    const {state} = useLocation();
    
    const navigate = useNavigate();
    const onClickSearch = () => {
        navigate('');
    }
    
    const [pointer1, setPointer1] = useState('none');
    const [pointer2, setPointer2] = useState('');
    const changeState = () =>{
        setPointer1('');
        setPointer2('none');
    }

    return(
      <div style={{backgroundColor:"white", height:"100vh"}}>
        <div>
            <div style={{
                display:"inline-block",
                width:"70vw",
                height:"5.5vh",
                marginTop:"3vh",
                marginBottom:"3vh",
                marginLeft:"1.5vw",
                paddingLeft:"3.5vw",
                alignItems:"center",
                border:"0",
                borderRadius:"20px",
                backgroundColor:"#f1f1f1"}}>

                <input type="text" placeholder="검색어를 입력하세요" style={{
                display:`${pointer1}`,
                width:"50vw",
                height:"4.7vh",
                marginLeft:"1.5vw",
                paddingTop:"1vw",
                border:"0",
                fontSize:"16px",
                backgroundColor:"#f1f1f1"
                }}></input>

                <p style={{
                display:`${pointer2}`,
                float:"left",
                width:"50vw",
                height:"3vh",
                marginTop:"1vh",
                marginBottom:"1vh",
                marginLeft:"1.5vw",
                paddingTop:"1vw",
                border:"0",
                fontSize:"16px",
                backgroundColor:"#f1f1f1"}}>{state.title["queries"]}</p>

                <img src={search2} alt="검색" style={{float:"right", width:"5vw", marginTop:"1.5vh", marginRight:"4vw"}}></img>
                <img onClick={changeState} src={x} alt="지우기" style={{float:"right",width:"4vw",marginTop:"1.7vh",marginRight:"2.5vw"}}/>
            </div>
            <Link to="/search" style={{textDecoration:"none"}}>
                <p style={{float:"right", marginRight:"7vw",marginTop:"4.4vh",textDecoration:"none"}}>취소</p>
            </Link>
        </div>
        
        <div style={{display:"table",marginBottom:"2vh"}}>
            <img src={StudentsSogangdang} alt="학생회관 소강당" style={{float:"left", margin:"2vw",marginBottom:"0"}}/>
            <img src={hwasalpyo3} alt="화살표" style={{float:"right",width:"6.5vw",marginTop:"2.5vh",marginRight:"4vw"}}/>
            <div style={{display:"inline-blcok",float:"left",paddingTop:"1vh",lineHeight:"2vw",letterSpacing:"-0.5px"}}>
                <h4 style={{fontSize:"18px"}}>학생회관 소강당</h4>
                <p style={{fontSize:"14px"}}>22호관</p>
                <p style={{fontSize:"14px"}}>9:00 ~ 22:00</p>
            </div>
            <button style={{float:"right",width:"30vw",height:"3.5vh",marginTop:"-1vh",marginRight:"6vw",color:"white",fontSize:"12px",border:"0",borderRadius:"20px",backgroundColor:"#1FBC70"}}>예약하기</button>
        </div>
        <div style={{display:"table",marginBottom:"2vh"}}>
            <img src={StudentsSogangdang} alt="학생회관 소강당" style={{float:"left", margin:"2vw",marginBottom:"0"}}/>
            <img src={hwasalpyo3} alt="화살표" style={{float:"right",width:"6.5vw",marginTop:"2.5vh",marginRight:"4vw"}}/>
            <div style={{display:"inline-blcok",float:"left",paddingTop:"1vh",lineHeight:"2vw",letterSpacing:"-0.5px"}}>
                <h4 style={{fontSize:"18px"}}>학생회관 소강당</h4>
                <p style={{fontSize:"14px"}}>22호관</p>
                <p style={{fontSize:"14px"}}>9:00 ~ 22:00</p>
            </div>
            <button style={{float:"right",width:"30vw",height:"3.5vh",marginTop:"-1vh",marginRight:"6vw",color:"white",fontSize:"12px",border:"0",borderRadius:"20px",backgroundColor:"#1FBC70"}}>예약하기</button>
        </div>
        <div style={{display:"table",marginBottom:"2vh"}}>
            <img src={StudentsSogangdang} alt="학생회관 소강당" style={{float:"left", margin:"2vw",marginBottom:"0"}}/>
            <img src={hwasalpyo3} alt="화살표" style={{float:"right",width:"6.5vw",marginTop:"2.5vh",marginRight:"4vw"}}/>
            <div style={{display:"inline-blcok",float:"left",paddingTop:"1vh",lineHeight:"2vw",letterSpacing:"-0.5px"}}>
                <h4 style={{fontSize:"18px"}}>학생회관 소강당</h4>
                <p style={{fontSize:"14px"}}>22호관</p>
                <p style={{fontSize:"14px"}}>9:00 ~ 22:00</p>
            </div>
            <button style={{float:"right",width:"30vw",height:"3.5vh",marginTop:"-1vh",marginRight:"6vw",color:"white",fontSize:"12px",border:"0",borderRadius:"20px",backgroundColor:"#1FBC70"}}>예약하기</button>
        </div>
        <div style={{display:"table",marginBottom:"2vh"}}>
            <img src={StudentsSogangdang} alt="학생회관 소강당" style={{float:"left", margin:"2vw",marginBottom:"0"}}/>
            <img src={hwasalpyo3} alt="화살표" style={{float:"right",width:"6.5vw",marginTop:"2.5vh",marginRight:"4vw"}}/>
            <div style={{display:"inline-blcok",float:"left",paddingTop:"1vh",lineHeight:"2vw",letterSpacing:"-0.5px"}}>
                <h4 style={{fontSize:"18px"}}>학생회관 소강당</h4>
                <p style={{fontSize:"14px"}}>22호관</p>
                <p style={{fontSize:"14px"}}>9:00 ~ 22:00</p>
            </div>
            <button style={{float:"right",width:"30vw",height:"3.5vh",marginTop:"-1vh",marginRight:"6vw",color:"white",fontSize:"12px",border:"0",borderRadius:"20px",backgroundColor:"#1FBC70"}}>예약하기</button>
        </div>
      </div>
    );
}

export default SearchResults;