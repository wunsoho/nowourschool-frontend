import React, { useState } from "react";
import SoGangDang from "../../../Image/SoGangDang.png";
import Openclass from "../../../Image/OpenClass.png";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as R from "./Review.style";
import seeMore from "../../../Image/seeMore.png";
import x from "../../../Image/x2.png";
import "../Review/ReviewModal/styles.css";

function Review(){

    const navigate = useNavigate();

    function handleClick1(){
        navigate('/review/writereview');
    }

    const [Modal, setModal] = useState("none");

    const changeModalState1 = () => {
        setModal("flex");
    }
    const changeModalState2 = () => {
        setModal("none");
    }

    const [PageDisplay1,setPageDisplay1] = useState("table");

    const [PageDisplay2,setPageDisplay2] = useState("none");

    const [BottomControl1,setBottomControl1] = useState("2.5px solid #1FBC70");
    const changeState1 = () =>{
        setBottomControl1("2.5px solid #1FBC70");
        setBottomControl2("0");
        setPageDisplay1("table");
        setPageDisplay2("none");
    }

    const [BottomControl2,setBottomControl2] = useState("0");
    const changeState2 = () =>{
        setBottomControl1("0");
        setBottomControl2("2.5px solid #414247");
        setPageDisplay1("none");
        setPageDisplay2("table");
    }

    return(
        <div style={{height:"92vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/mypage">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{display:"flex",justifyContent:"center",fontWeight:"700",fontSize:"20px",letterSpacing:"-0.4vw"}}>리뷰 관리</h3>
            </div>

            <div style={{backgroundColor: "#FFFFFF", width:"96vw", height:"5vh",marginTop:"5vh"}}>
                <p onClick={changeState1} style={{float:"left",display:"flex",justifyContent:"center",alignItems:"center",width:"48vw",height:"5vh",margin:"0",fontSize:"16px",backgroundColor:"white",borderBottom:`${BottomControl1}`}}>리뷰 작성하기</p>
                <p onClick={changeState2} style={{float:"right",display:"flex",justifyContent:"center",alignItems:"center",width:"48vw",height:"5vh",margin:"0",fontSize:"16px",backgroundColor:"white",borderBottom:`${BottomControl2}`}}>작성한 리뷰</p>
            </div>

            <R.TableBox1 style={{display:`${PageDisplay1}`}}>
                <p style={{float:"left", margin:"2vw",marginLeft:"4vw",stroke: "var(--gray3, #F1F1F1)"}}>이용일 <span style={{fontWeight:"600"}}>2023.06.17</span></p><br/><br/>
                <div
                style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "0.5px solid #f1f1f1",
                }}/>
                <img src={SoGangDang} alt="소강당" style={{float:"left", width: "30vw", margin:"3vw",marginTop:"4vw"}}/>
                <div style={{float:"left", marginTop:"3vh",marginRight:"10vw",lineHeight:"5vw"}}>
                    <p style={{fontWeight:"600", fontSize:"20px",letterSpacing:"-0.4vw",lineHeight:"0"}}>학생회관 소강당</p>
                    <p style={{marginBottom:"3vw",letterSpacing:"-0.3vw"}}>22호관 지하 1F</p>
                </div>
                <R.ReviewButton to="/writereview" onClick={handleClick1}>리뷰 작성</R.ReviewButton>
            </R.TableBox1>

            <R.TableBox1 style={{display:`${PageDisplay1}`}}>
                <p style={{float:"left", margin:"2vw",marginLeft:"4vw",stroke: "var(--gray3, #F1F1F1)"}}>이용일 <span style={{fontWeight:"600"}}>2023.06.17</span></p><br/><br/>
                <div
                style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "0.5px solid #f1f1f1",
                }}/>
                <img src={Openclass} alt="소강당" style={{float:"left", width: "30vw", margin:"3vw",marginTop:"4vw"}}/>
                <div style={{float:"left", marginTop:"3vh",marginRight:"10vw",lineHeight:"5vw"}}>
                    <p style={{fontWeight:"600", fontSize:"20px",letterSpacing:"-0.4vw",lineHeight:"0"}}>열린 열람실</p>
                    <p style={{marginBottom:"3vw",letterSpacing:"-0.3vw"}}>구아산 도서관</p>
                </div>
                <R.ReviewButton to="/writereview" onClick={handleClick1}>리뷰 작성</R.ReviewButton>
            </R.TableBox1>

            <R.TableBox2 style={{display:`${PageDisplay2}`}}>
                <p style={{float:"left", margin:"2vw",marginLeft:"5vw",stroke: "var(--gray3, #F1F1F1)"}}>작성일 <span style={{fontWeight:"600"}}>2023.06.17</span></p><br/><br/>
                <div
                style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "0.5px solid #f1f1f1",
                }}/>
                <img src={SoGangDang} alt="소강당" style={{float:"left", width: "15vw", margin:"3vw",marginTop:"3vw"}}/>
                <div style={{float:"left", marginTop:"1vh",lineHeight:"5vw"}}>
                    <p style={{fontWeight:"500", fontSize:"17px",lineHeight:"0",letterSpacing:"-0.3vw"}}>학생회관 소강당</p>
                    <p style={{marginBottom:"0",fontSize:"12px",letterSpacing:"-0.3vw"}}>동아리 공연때문에 대여하였습니다 만족합니다</p>
                </div>
                <img onClick={changeModalState1} src={seeMore} alt="더보기" style={{float:"right",margin:"3vw",marginTop:"4vw",marginRight:"4vw"}}/>
                <div className="front-modal" style={{display: `${Modal}`}}>
                    <div className="modal">
                        <img onClick={changeModalState2} src={x} alt="닫기" style={{float:"right",width:"4vw",height:"4vw",margin:"5vw"}}/>
                        <button style={{width:"50%",height:"4.5vh",marginLeft:"2vw",marginTop:"4vh",fontSize:"15px",textAlign:"left",background:"none",border:"0"}}>리뷰 수정</button><br/>
                        <button style={{width:"50%",height:"4.5vh",marginLeft:"2vw",marginTop:"1vh",fontSize:"15px",textAlign:"left",background:"none",border:"0"}}>리뷰 삭제</button>
                    </div>
                </div>
            </R.TableBox2>

            <R.TableBox2 style={{display:`${PageDisplay2}`}}>
                <p style={{float:"left", margin:"2vw",marginLeft:"5vw",stroke: "var(--gray3, #F1F1F1)"}}>작성일 <span style={{fontWeight:"600"}}>2023.06.17</span></p><br/><br/>
                <div
                style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "0.5px solid #f1f1f1",
                }}/>
                <img src={SoGangDang} alt="소강당" style={{float:"left", width: "15vw", margin:"3vw",marginTop:"3vw"}}/>
                <div style={{float:"left", marginTop:"1vh",lineHeight:"5vw"}}>
                    <p style={{fontWeight:"500", fontSize:"17px",lineHeight:"0",letterSpacing:"-0.3vw"}}>학생회관 소강당</p>
                    <p style={{marginBottom:"0",fontSize:"12px",letterSpacing:"-0.3vw"}}>동아리 공연때문에 대여하였습니다 만족합니다</p>
                </div>
                <img onClick={changeModalState1} src={seeMore} alt="더보기" style={{float:"right",margin:"3vw",marginTop:"4vw",marginRight:"4vw"}}/>
                <div className="front-modal" style={{display: `${Modal}`}}>
                    <div className="modal">
                        <img onClick={changeModalState2} src={x} alt="닫기" style={{float:"right",width:"4vw",height:"4vw",margin:"5vw"}}/>
                        <button style={{width:"50%",height:"4.5vh",marginLeft:"2vw",marginTop:"4vh",fontSize:"15px",textAlign:"left",background:"none",border:"0"}}>리뷰 수정</button><br/>
                        <button style={{width:"50%",height:"4.5vh",marginLeft:"2vw",marginTop:"1vh",fontSize:"15px",textAlign:"left",background:"none",border:"0"}}>리뷰 삭제</button>
                    </div>
                </div>
            </R.TableBox2>
        </div>
    );
}

export default Review;
