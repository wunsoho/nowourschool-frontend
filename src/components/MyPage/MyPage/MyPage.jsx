import React from "react";
import Profile from "./Profile/Profile";
import PageFunctions from "./PageFunctions";

function MyPage(){
    return(
    <div style={{
        height:"92vh"
    }}>
        <Profile/>
        <PageFunctions/>
    </div>
    );
}

export default MyPage;