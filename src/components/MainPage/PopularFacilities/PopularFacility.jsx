import React, {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import * as P from "../PopularFacilities/Styles/PopularFacility.style";
import NoGauge from "./Gauges/MainVersion/NoGauge"; // 게이지 없음
import OneFourGauge from "./Gauges/MainVersion/OneFourGauge"; // 4 분의 1 게이지
import HalfGauge from "./Gauges/MainVersion/HalfGauge";
import ThreeFourGauge from "./Gauges/MainVersion/ThreeFourGauge";
import FullGauge from "./Gauges/MainVersion/FullGauge";
import axios from "axios";

function PopularFacility(){

    const navigate = useNavigate();

    function handleClick (){
        navigate('/popularfacility/placestates');
    }
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

    return(
        <P.EntirePopularFacilityBack>
            <p style={{fontWeight:"bold", fontSize:"18px", paddingBottom:"0vh", display:"inline-block"}}>열람실 현황</p>    
            <p onClick={handleClick} style={{fontSize:"12px", float: "Right", marginTop:"2.5vh", marginRight:"3vw",color:"#414247",fontWeight: "400"}}>전체보기</p>
            
            {facilityData.map((fd) => (
              <P.SemiPopularFacilityBack>
              <P.PlaceName>{fd.name}</P.PlaceName>
          {/* 남아있는 좌석에 따라 움직이는 표시 및 게이지 표시할 자리 */}
              <P.GaugeBack>
                  <p style={{float:"left"}}>{fd.current}&nbsp;</p> 
                  <OneFourGauge/>
                  <p style={{display:"flex",float:"right"}}>&nbsp;{fd.total}</p>
              </P.GaugeBack>
          </P.SemiPopularFacilityBack>
            ))}
            
        </P.EntirePopularFacilityBack>
    );
}


export default PopularFacility;