import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


function Semina(){
    const {state} = useLocation();

    const [facilityData, setFacilityData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
              const result = await axios.get(
                `https://localhost:8080/api/v1/facility/keyword/${state.keyword["seminar"]}`,
                {
                  headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiZW1haWwiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiaWF0IjoxNzA4MjUwOTY0LCJleHAiOjE3MDgyNTgxNjR9.JI4N0BnMxMvPesFK8axiz67jxhRHUIVVNdA9f1hks7g",
                  },
                }
              );
              if (result.data.isSuccess === true) {
                setFacilityData(result.data.result.list);
                console.log(facilityData);
              } else {
                console.error("서버 응답 오류:", result.data.message);
              }
            } catch (error) {
              console.error("서버 요청 오류:", error);
            }
          };
        fetchData();
      }, []);

    return(
        <div style={{marginBottom:"10vh"}}>
            <div style={{paddingTop:"0.5vh"}}>
                <Link to="/">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"2.5vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{display:"flex",justifyContent:"center",marginRight:"6vw",fontWeight:"700",fontSize:"20px",letterSpacing:"-0.4vw"}}>세미나</h3>
            </div>
            {facilityData.map((fd)=>(
                <div style={{display:"flex", marginBottom:"2vh"}}>
                    <img src={fd.imageURL} alt={fd.name} style={{width:"96vw", position:"relative",verticalAlign:"middle"}}/>
                    <p style={{position:"absolute",margin:"0",marginTop:"22.5vh",marginLeft:"2vw",color:"white",letterSpacing:"-0.3vw",fontWeight:"600",fontSize:"16px"}}>{fd.description}</p>
                    <p style={{position:"absolute",margin:"0",marginTop:"21vh",marginLeft:"58.5vw",color:"white",fontWeight:"800",fontSize:"28px",letterSpacing:"-0.3vw"}}>{fd.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Semina;