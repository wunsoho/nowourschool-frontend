import React,{useState} from "react";
import * as G from "./Gauge.style";

// 게이지 없음

function NoGauge(){
    return(
        <G.ZeroGauge>
        </G.ZeroGauge>
    );
};

export default NoGauge;


// const [numerical,setNumerical] = useState(props);
// const entireNum1 = '402';
// const entireNum2 = '200';
// const entireNum3 = '100';
