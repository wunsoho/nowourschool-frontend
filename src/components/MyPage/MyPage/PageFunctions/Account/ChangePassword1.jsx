import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";

function ChangePassword1(){

    const navigate = useNavigate();

    function handleClick(){
        navigate('/changepassword2');
    }

    return(
        <div style={{height:"92vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/account">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"34.5vw",letterSpacing:"-1px", fontSize:"20px"}}>비밀번호 변경</h3>
            </div>
            {/* display 속성  이중(물음표)조건문으로 보여주기 안보여주기 기능 설정 및 확인 버튼 마진 설정 */}
            <div style={{marginTop:"5vh",display:""}}>
                <h3 style={{marginLeft:"3vw",fontSize:"18px",letterSpacing:"-0.4vw"}}>현재 비밀번호</h3>
                <div>
                    <input type="password" placeholder="영문,숫자 포함 8~15자리" style={{width:"89vw",height:"6vh",backgroundColor:"#f1f1f1",marginBottom:"1vh",marginLeft:"2vw",paddingLeft:"3vw",border:"0",borderRadius:"10px",fontSize:"15px"}}/>
                    <input type="password" placeholder="비밀번호를 다시 입력해주세요." style={{width:"89vw",height:"6vh",backgroundColor:"#f1f1f1",marginLeft:"2vw",paddingLeft:"3vw",border:"0",borderRadius:"10px",fontSize:"15px"}}/>
                </div>
            </div>
            
            {/*useState사용해서 disabled 속성 이용해서 비밀번호 입력후에 맞으면 disabled 속성이 해제되도록 하는 기능 추가 */}
            <button onClick={handleClick} type="submit" style={{position:"relative",width:"92vw",height:"7vh",marginTop:"45vh",marginLeft:"2vw",fontWeight:"700",fontSize:"17px",border:"0",backgroundColor:"#bbbbbb",borderRadius:"4.7vw",boxShadow:"none"}}>확인</button>
        </div>
    );
}

export default ChangePassword1;