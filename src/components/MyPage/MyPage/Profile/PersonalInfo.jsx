import React, { useRef, useState } from "react";
import hwasalpyo2 from "../../../MainPage/Image/hwasalpyo2.png";
import PlusMark from "../../Image/+.png";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../../Image/ProfileImg.png";
import './style.css';

function Personalnfo(){

    const navigate = useNavigate();

    const handleClick =() => {
        navigate('/',{
            state: {
                img: {imgFile}
            }});
    }

    const [imgFile, setImgFile] = useState(ProfileImage);
    const imgRef = useRef();
    
    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
           };
    };

    return(
        <div style={{height:"100vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/mypage">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"36vw",letterSpacing:"-1px", fontSize:"20px"}}>개인정보 수정</h3>
            </div>

            <div>
                <img src={imgFile ? imgFile : ProfileImage} style={{width:"35vw",height:"35vw",marginLeft:"34vw",backgroundColor:"#f1f1f1",borderRadius:"20vw"}}/>
                <form style={{marginLeft:"38vw"}}>
                    <label className="signup-profileImg-label" htmlFor="profileImg">프로필 이미지 추가</label>
                    <input
                    type="file"
                    accept="image/*"
                    id="profileImg"
                    onChange={saveImgFile}
                    ref={imgRef}
                    style={{display:"none"}}
                    />
                </form>
            </div>

            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>이름</h4>
                <input type="text" placeholder="홍길동" style={{width:"83vw",height:"6vh",marginLeft:"4vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>닉네임</h4>
                <input type="text" placeholder="메롱고양이" style={{width:"83vw",height:"6vh",marginLeft:"4vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>학교</h4>
                <input type="text" placeholder="울산대학교" style={{width:"83vw",height:"6vh",marginLeft:"4vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>전공</h4>
                <input type="text" placeholder="디지털콘텐츠디자인학과" style={{width:"83vw",height:"6vh",marginLeft:"4vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <div style={{display:"table"}}>
                <h4 style={{marginLeft:"3vw"}}>학년</h4>
                <input type="text" placeholder="1" style={{width:"83vw",height:"6vh",marginLeft:"4vw",paddingLeft:"5vw",backgroundColor:"#f1f1f1",border:"0",borderRadius:"5vw",fontSize:"15px"}}/>
            </div>
            <button onClick={handleClick} type="submit" style={{width:"90vw",height:"6vh",marginTop:"3vh",marginBottom:"11vh",marginLeft:"3vw",fontSize:"16px",color:"white",backgroundColor:"#1FBC70",border:"0",borderRadius:"5vw"}}>수정</button>
        </div>
    );
}

export default Personalnfo;

