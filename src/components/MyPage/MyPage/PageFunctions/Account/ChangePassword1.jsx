import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import axios from "axios";

function ChangePassword1(){

    const [currentPassword, setCurrentPassword] = useState('');
    const [currentPassword1, setCurrentPassword1] = useState('');
    
    const [changePassword, setChangePassword] = useState('');

    const handlePostRequest = async () => {
        try {
        const response = await axios.post('http://13.125.247.248:8080/api/v1/auth/change-password', 
        {
            currentPassword: currentPassword1,
        },
        {
            header: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3dW5zb2hvQG1haWwudWxzYW4uYWMua3IiLCJlbWFpbCI6Ind1bnNvaG9AbWFpbC51bHNhbi5hYy5rciIsImlhdCI6MTcwODMxOTU2NCwiZXhwIjoxNzA4MzI2NzY0fQ.IxG-E3LeOyNFHjlmaA81YppkkI5vXY3TjW-X-C_NoCw',
                'Content-Type': 'application/json'  
            }
        });

        console.log('Server Response:', response.data);
        } catch (error) {
        console.error('Error sending POST request:', error);
        }

        if(isPassed === true){
            navigate('/changepassword2');
        }
    };
    
    
    const navigate = useNavigate();
    const [isPassed, setIsPassed] = useState(false);

    

    const [backColor, setBackColor] = useState("#bbbbbb");
    const [fontColor, setFontColor] = useState("black");

    const changeState = () => {
        if(currentPassword == currentPassword1){
            setBackColor("#1FBC70");
            setFontColor("white");
            setIsPassed(true);
        }else if(currentPassword != currentPassword1){
            setBackColor('#bbbbbb');
            setFontColor('#black');
            setIsPassed(false);
        }
    };
    // #1FBC70

    return(
        <div style={{height:"92vh"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/account">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"34.5vw",letterSpacing:"-1px", fontSize:"20px"}}>비밀번호 변경</h3>
            </div>
            <div style={{marginTop:"5vh"}}>
                <h3 style={{marginLeft:"3vw",fontSize:"18px",letterSpacing:"-0.4vw"}}>현재 비밀번호</h3>
                <div onKeyUp={changeState}>
                    <input value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} type="password" placeholder="영문,숫자 포함 8~15자리" style={{width:"89vw",height:"6vh",backgroundColor:"#f1f1f1",marginBottom:"1vh",marginLeft:"2vw",paddingLeft:"3vw",border:"0",borderRadius:"10px",fontSize:"15px"}}/>
                    <input value={currentPassword1} onChange={(e) => setCurrentPassword1(e.target.value)} type="password" placeholder="비밀번호를 다시 입력해주세요." style={{width:"89vw",height:"6vh",backgroundColor:"#f1f1f1",marginLeft:"2vw",paddingLeft:"3vw",border:"0",borderRadius:"10px",fontSize:"15px"}}/>
                </div>
            </div>
            
            {/*useState사용해서 disabled 속성 이용해서 비밀번호 입력후에 맞으면 disabled 속성이 해제되도록 하는 기능 추가 */}
            <button onClick={handlePostRequest} type="submit" style={{position:"relative",width:"92vw",height:"7vh",marginTop:"45vh",marginLeft:"2vw",fontWeight:"700",fontSize:"17px",border:"0",color:`${fontColor}`,backgroundColor:`${backColor}`,borderRadius:"4.7vw",boxShadow:"none"}}>확인</button>
        </div>
    );
}

export default ChangePassword1;