import React, { useState } from "react";
import hwasalpyo2 from "../../../MainPage/Image/hwasalpyo2.png";
import { Link } from "react-router-dom";

function QnA(){

  const [postContent1, setPostContent1] = useState('');
  const [postContent2, setPostContent2] = useState('');

  const data = {
    title: {postContent1},
    body: {postContent2},
  };


  const handleContentChange1 = (event) => {
      setPostContent1(event.target.value);
  };

  const handleContentChange2 = (event) => {
    setPostContent2(event.target.value);
};

  const handleUpload = async () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3dW5zb2hvQG1haWwudWxzYW4uYWMua3IiLCJlbWFpbCI6Ind1bnNvaG9AbWFpbC51bHNhbi5hYy5rciIsImlhdCI6MTcwODI1MDc0NCwiZXhwIjoxNzA4MjU3OTQ0fQ.riLbTDBBS6s6r98ZPfBjUfL3sDcRWn1_y8vt4FGqB8M';
      try {
        const response = await fetch('https://13.125.247.248:8080/api/v1/user/inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log('글이 성공적으로 업로드되었습니다.');
          
        } else {
          console.error('글 업로드에 실패했습니다.');
        }
      } catch (error) {
        console.error('오류 발생:', error);
      }
    };


    return(
        <div style={{height:"92vh", backgroundColor:"#f1f1f1"}}>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/mypage">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"40vw",letterSpacing:"-1px", fontSize:"20px"}}>문의하기</h3>
            </div>
            <div style={{
                width:"96vw",
                height:"70vh",
                border:"0",
                borderRadius:"20px",
                marginTop:"3vh",
                boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)",
                backgroundColor:"white"
            }}>
                <input type="text" value={postContent1} onChange={handleContentChange1} placeholder="제목을 입력해주세요." style={{width:"90vw",height:"5vh",marginTop:"8vh",paddingLeft:"5vw",border:"0",borderBottom: "0.5px solid #f1f1f1",fontSize:"16px",letterSpacing:"-0.2vw"}}/>
                <textarea type="text" value={postContent2} onChange={handleContentChange2} placeholder="문의 내용을 입력해주세요." style={{width:"86vw",height:"39.5vh",paddingTop:"2vh",paddingBottom:"30vw",paddingLeft:"5vw",paddingRight:"5vw",border:"0",fontSize:"15px",fontFamily:"pretendard",letterSpacing:"-0.2vw"}}/>
            </div>
            <button onClick={handleUpload} style={{width:"96.5vw", height:"6vh", marginTop:"2.5vh",fontSize:"16px",fontWeight:"600",color:"white",backgroundColor:"#1FBC70",borderRadius:"5vw",border:"0"}}>문의하기</button>
        </div>
    );
}

export default QnA;