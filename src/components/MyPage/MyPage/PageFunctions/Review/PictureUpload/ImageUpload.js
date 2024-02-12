// ImageUpload.js
import React, { useState } from 'react';

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
      <p>이미지 업로드</p>
      <input type="file" multiple onChange={handleImageChange} />
      <div>
        {images.map((image, index) => (
          <img key={index} src={`http://13.125.247.248:8080/api/v1/user/review${image}`} alt={`uploaded-${index}`} style={{ width: '25vw', height: '25vw',marginLeft:"2vw",marginRight:'2vw',borderRadius:"4vw"}} />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
