import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import hwasalpyo2 from "../Image/hwasalpyo2.png";
import NoGauge from "./Gauges/PlaceStatesVersion/NoGauge";
import OneFourGauge from "./Gauges/PlaceStatesVersion/OneFourGauge";
import HalfGauge from "./Gauges/PlaceStatesVersion/HalfGauge";
import ThreeFourGauge from "./Gauges/PlaceStatesVersion/ThreeFourGauge";
import FullGauge from "./Gauges/PlaceStatesVersion/FullGauge";
import info from "../Image/Info.png";
import axios from "axios";

function PlaceStates() {

    const [facilityData, setFacilityData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const result = await axios.get(
              'https://13.125.247.248:8080/api/v1/facility/library',
              {
                headers: {
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3dW5zb2hvQG1haWwudWxzYW4uYWMua3IiLCJlbWFpbCI6Ind1bnNvaG9AbWFpbC51bHNhbi5hYy5rciIsImlhdCI6MTcwODI1ODcwMiwiZXhwIjoxNzA4MjY1OTAyfQ.nwt5ebjGG-XHIwVMCFWpEJelmdGkPhTnyIfARlI0S0w",
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

    const Gauge = () => {
      if(facilityData.current / facilityData.total > 0.7 && facilityData.current / facilityData.total < 0.9){
        return(
          <div>
            <ThreeFourGauge/>
          </div>
        )
      }else if(facilityData.current / facilityData.total < 0.7 && facilityData.current / facilityData.total > 0.49){
        return(
          <div>
            <HalfGauge/>
          </div>
        )
      }else if(facilityData.current / facilityData.total < 0.5 && facilityData.current / facilityData.total > 0.24){
        return(
          <div>
            <OneFourGauge/>
          </div>
        )
      }else if(facilityData.current / facilityData.total < 0.25){
        return(
          <div>
            <NoGauge/>
          </div>
        )
      }
    }

  
    return(
        <div style={{fontFamily: "Pretendard",backgroundColor:"#f9f9f9"}}>
            <div style={{marginTop:"3vh",marginBottom:"4vh"}}>
                <Link to="/">
                    <img src={hwasalpyo2} alt="화살표" style={{float:"left",margin:"0",marginTop:"0.3vh", marginLeft:"2vw"}}/>
                </Link>
                <h3 style={{marginLeft:"36vw",letterSpacing:"-1px", fontSize:"20px"}}>열람실 현황</h3>
            </div>
            {facilityData.map((fd) => (
              <div style={{display:"table",width:"95vw",height:"10vh",marginBottom:"2vh",border:"0",borderRadius:"20px",boxShadow:"0px 1px 3.5px 0px rgba(0, 0, 0, 0.25)"}}>  
                <h3 style={{float:"left",width:"75vw",margin:"2vw",marginBottom:"0.5vh",marginTop:"4vw",marginRight:"0",marginLeft:"4.5vw",fontFamily:"pretendard"}}>{fd.name}</h3>
                <p style={{float:"right", margin:"2vw",marginTop:"4vw",marginLeft:"0",marginRight:"5vw",fontSize:"14px",letterSpacing:"-1px"}}>{fd.status}</p>
                <Gauge/>
            </div>
            ))}
        </div>
    )
}

export default PlaceStates;