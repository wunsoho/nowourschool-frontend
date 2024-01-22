import React from "react";
import hwasalpyo from "../Image/hwasalpyo.png";
import * as P from "../PopularFacilities/Styles/PopularFacility.style";
import NoGauge from "./Gauges/NoGauge"; // 게이지 없음
import OneFourGauge from "./Gauges/OneFourGauge"; // 4 분의 1 게이지
import HalfGauge from "./Gauges/HalfGauge";
import ThreeFourGauge from "./Gauges/ThreeFourGauge";
import FullGauge from "./Gauges/FullGauge";

function PopularFacility(){
    return(
        <P.EntirePopularFacilityBack>
            <p style={{margin:"0", fontWeight:"bold", fontSize:"18px",paddingBottom:"1vh"}}>인기시설</p>
            
            <P.SemiPopularFacilityBack>
                <P.PlaceName>열린열람실</P.PlaceName>
            {/* 남아있는 좌석에 따라 움직이는 표시 및 게이지 표시할 자리 */}
                <P.GaugeBack>
                    <p style={{float:"left"}}>342&nbsp;</p> 
                    <ThreeFourGauge/>
                    <p style={{display:"flex",float:"right"}}>&nbsp;402</p>
                </P.GaugeBack>
                <img src={hwasalpyo} alt="화살표" style={{float:"right"}}/>
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
                <img src={hwasalpyo} alt="화살표" style={{float:"right"}}/>
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
                <img src={hwasalpyo} alt="화살표" style={{float:"right"}}/>
            </P.SemiPopularFacilityBack>
        </P.EntirePopularFacilityBack>
    );
}


export default PopularFacility;