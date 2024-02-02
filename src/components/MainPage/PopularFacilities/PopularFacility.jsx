import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as P from "../PopularFacilities/Styles/PopularFacility.style";
import NoGauge from "./Gauges/MainVersion/NoGauge"; // 게이지 없음
import OneFourGauge from "./Gauges/MainVersion/OneFourGauge"; // 4 분의 1 게이지
import HalfGauge from "./Gauges/MainVersion/HalfGauge";
import ThreeFourGauge from "./Gauges/MainVersion/ThreeFourGauge";
import FullGauge from "./Gauges/MainVersion/FullGauge";

function PopularFacility(){
    return(
        <P.EntirePopularFacilityBack>
            <p style={{fontWeight:"bold", fontSize:"18px", paddingBottom:"0vh", display:"inline-block"}}>열람실 현황</p>
            <Link to="/placestates">
                <p style={{fontSize:"12px", float: "Right", marginTop:"2.5vh", marginRight:"3vw",color:"#414247",fontWeight: "400"}}>전체보기</p>
            </Link>
            <P.SemiPopularFacilityBack>
                <P.PlaceName>열린열람실</P.PlaceName>
            {/* 남아있는 좌석에 따라 움직이는 표시 및 게이지 표시할 자리 */}
                <P.GaugeBack>
                    <p style={{float:"left"}}>342&nbsp;</p> 
                    <ThreeFourGauge/>
                    <p style={{display:"flex",float:"right"}}>&nbsp;402</p>
                </P.GaugeBack>
            </P.SemiPopularFacilityBack>

            <br/>

            <P.SemiPopularFacilityBack>
                <P.PlaceName>창의열람실</P.PlaceName>
                {/* 남아있는 좌석에 따라 움직이는 표시 및 게이지 표시할 자리 */}
                <P.GaugeBack>
                    <p style={{float:"left"}}>117&nbsp;</p> 
                    <HalfGauge/>
                    <p style={{display:"flex",float:"right"}}>&nbsp;200</p>
                </P.GaugeBack>
            </P.SemiPopularFacilityBack>

            <br/>
            
            <P.SemiPopularFacilityBack>
                <P.PlaceName>집중열람실</P.PlaceName>
                {/* 남아있는 좌석에 따라 움직이는 표시 및 게이지 표시할 자리 */}
                <P.GaugeBack>
                    <p style={{float:"left", paddingRight:"1.7vw"}}>28</p> 
                    <OneFourGauge/>
                    <p style={{display:"flex",float:"right"}}>&nbsp;100</p>
                </P.GaugeBack>
            </P.SemiPopularFacilityBack>
        </P.EntirePopularFacilityBack>
    );
}


export default PopularFacility;