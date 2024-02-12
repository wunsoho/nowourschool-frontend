import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import SoGangDang from "../../../Image/SoGangDang.png";
import StarRating from "./StarRating/StarRating";
import { useRef,useState } from "react";
import Camera from "../../../Image/Camera.png";
import styled from "styled-components";
import axios from "axios";
import ImageUpload from "./PictureUpload/ImageUpload";

function WriteReview(){

    const {state} = useLocation();
    

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/review');
    }

    const [BackColor,setBackColor] = useState('#bbbbbb');
    const [fontColor,setFontColor] = useState('black');
    const ChangeState = () => {
        setBackColor('#1FBC70');
        setFontColor('white');
    }


    const ImageUpload = () => {
        const [images, setImages] = useState([]);
      
        const handleImageChange = async (e) => {
            const files = e.target.files;
            const formData = new FormData();
        
            for (let i = 0; i < files.length; i++) {
              formData.append('images', files[i]);
            }
        
            try {
              const response = await fetch('http://13.125.247.248:8080/api/v1/user/review', {
                method: 'POST',
                body: formData,
              });
        
              if (response.ok) {
                const data = await response.json();
                const newImages = data.imageUrls;
                setImages([...images, ...newImages]);
              } else {
                console.error('Failed to upload images');
              }
            } catch (error) {
              console.error('Error during image upload:', error);
            }
          };
      
        
        return (
          <div>
            <div>
              {images.map((image, index) => (
                <img key={index} src={image} alt={`uploaded-${index}`} style={{ width: '20vw', height: '20vw',marginTop:"2vw",marginLeft:"2vw",marginRight:'2vw',borderRadius:"4vw" }} />
              ))}
            </div>
            <ReviewText type="text" placeholder="내용을 입력하세요."/>
            <input type="file" accept="image/*" multiple onChange={handleImageChange}/>
          </div>
        );
      };

    return(
        <div>
            <div style={{paddingTop:"2vh"}}>
                <Link to="/review">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{display:"flex",justifyContent:"center",fontWeight:"700",fontSize:"20px",letterSpacing:"-0.4vw"}}>리뷰 작성</h3>
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
            <div
            style={{
            width: "100%",
            textAlign: "center"
            }}/>
                <div style={{display:"table"}}>
                    <img src={state.img2["Openclass"]} alt="소강당" style={{float:"left", width: "15vw", margin:"3vw",marginTop:"3vh",borderRadius:"vw"}}/>
                    <div style={{float:"left", marginTop:"3vh",marginRight:"10vw",lineHeight:"5vw"}}>
                        <p style={{fontWeight:"600", fontSize:"16px",letterSpacing:"-0.4vw",lineHeight:"0"}}>학생회관 소강당</p>
                        <p style={{marginBottom:"3vw",letterSpacing:"-0.3vw"}}>22호관 지하 1F</p>
                    </div>
                </div>
                <div style={{display:"table",xwidth:"100%",height:"10vh",backgroundColor:"10vh",borderTop:"0.5px solid #f1f1f1"}}>
                    <StarRating/>
                </div>
                
                <div style={{borderTop: "0.5px solid #f1f1f1"}}>
                    <ImageUpload/>
                </div>
            </div>
            <button onClick={handleClick} style={{width:"96vw",height:"6.5vh",marginTop:"2.5vh",backgroundColor:`${BackColor}`,color:`${fontColor}`,fontSize:"16px",fontWeight:"700",border:"0",borderRadius:"5vw"}}>올리기</button>
        </div>  
    );
}

export default WriteReview;



const ReviewText = styled.textarea`
    width: 86vw;
    height: 10vh;
    padding-Top: 2vh;
    padding-Bottom: 10vw;
    padding-Left: 5vw;
    padding-Right: 5vw;
    border: 0;
    font-Size: 15px;
    font-Family: pretendard;
    letter-Spacing: -0.2vw;
`;
