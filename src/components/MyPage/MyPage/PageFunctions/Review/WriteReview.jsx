import React from "react";
import { Link, useNavigate } from "react-router-dom";
import hwasalpyo2 from "../../../../MainPage/Image/hwasalpyo2.png";
import SoGangDang from "../../../Image/SoGangDang.png";
import StarRating from "./StarRating/StarRating";
import { useRef,useState } from "react";
import Camera from "../../../Image/Camera.png";
import styled from "styled-components";
import axios from "axios";
import { useDropzone } from "react-dropzone";

function WriteReview(){

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/review');
    }

    const ImageUploader = ({onImageUpload}) => {
        // const onDrop = async (acceptedFiles) => {
        //     try {
        //       // FormData를 사용하여 이미지 파일을 서버로 전송합니다.
        //       const formData = new FormData();
        //       acceptedFiles.forEach((file) => {
        //         formData.append('images', file);
        //       });
        
        //       // 서버 업로드 endpoint를 설정합니다.
        //       const response = await axios.post('http://your-server-endpoint/upload', formData, {
        //         headers: {
        //           'Content-Type': 'multipart/form-data',
        //         },
        //       });
        
        //       // 업로드된 이미지들의 URL을 받아와 상위 컴포넌트로 전달합니다.
        //       const imageUrls = response.data.urls;
        //       onImageUpload(imageUrls);
        //     } catch (error) {
        //       console.error('Error uploading images:', error);
        //     }
        //   };
        
        const onDrop = async (acceptedFiles) => {
            try {
                // 'acceptedFiles' 배열에 업로드된 파일들이 포함됩니다.
                // 업로드된 이미지들을 상위 컴포넌트로 전달합니다.
                onImageUpload(acceptedFiles);
              } catch (error) {
                console.error('Error uploading images:', error);
            }
        };

        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

        return(
            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()}/>
                {
                    isDragActive ?
                    <p>이미지를 놓아주세요!</p>:
                    <p>이미지를 여기에 끌어오거나 클릭하여 업로드하세요.</p>
                }
            </div>
        );
    };

    const ImageGallery = ({images}) => {
        return(
            <div style={galleryStyle}>
                {images.map((image, index) => {
                    <img key={index} src={URL.createObjectURL(image)} accept="image/*" alt={`Uploaded ${index}`} style={imageStyle}/>
                })}
            </div>
        );
    };

    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImageUpload = async (images) =>{
        try {
            // 업로드된 이미지들을 상태에 추가합니다.
            setUploadedImages([...uploadedImages, ...images]);
          } catch (error) {
            console.error('Error updating images state:', error);
        }
    }

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
                    <img src={SoGangDang} alt="소강당" style={{float:"left", width: "15vw", margin:"3vw",marginTop:"3vh",borderRadius:"vw"}}/>
                    <div style={{float:"left", marginTop:"3vh",marginRight:"10vw",lineHeight:"5vw"}}>
                        <p style={{fontWeight:"600", fontSize:"16px",letterSpacing:"-0.4vw",lineHeight:"0"}}>학생회관 소강당</p>
                        <p style={{marginBottom:"3vw",letterSpacing:"-0.3vw"}}>22호관 지하 1F</p>
                    </div>
                </div>
                <div style={{display:"table",xwidth:"100%",height:"10vh",backgroundColor:"10vh",borderTop:"0.5px solid #f1f1f1"}}>
                    <StarRating/>
                </div>
                
                <div style={{borderTop: "0.5px solid #f1f1f1"}}>
                    <div style={containerStyle}>
                        <ImageUploader onImageUpload={handleImageUpload}/>
                        <ImageGallery images={uploadedImages} />
                    </div>
                    <ReviewText type="text" placeholder="내용을 입력하세요."/>
                    
                </div>
            </div>
            <button onClick={handleClick} style={{width:"96vw",height:"6.5vh",marginTop:"2.5vh",backgroundColor:"#BBBBBB",fontSize:"16px",fontWeight:"700",border:"0",borderRadius:"5vw"}}>올리기</button>
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

const containerStyle = {
    textAlign: 'center',
    margin: '5vw'
};

const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '1vw',
    padding: '5vw',
    cursor: 'pointer'
};

const galleryStyle = {
    display: 'flex',
    marginTop: '5vw',
    justifyContent: 'center'
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '37.5vw',
    margin: '2.5vw'
}