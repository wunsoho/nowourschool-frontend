import React from "react";
import Header from "./Header/Header";
import CarouselN from "./ProfileBox/carouselN";
import PopularFacility from "./PopularFacilities/PopularFacility";
import PlaceStates from "./PopularFacilities/PlaceStates";
import Notice from "./Notice/Notice";
import Slide from "./Slide/Slide";
import FAQ from "./FAQ/FAQ";
import NavigationBar from "./NavigationBar/NavigationBar";
import Categories from "./Categories/Categories";

function MainPage(){
    return(
        <div>
            <Header/>
            <CarouselN/>
            <Categories/>
            <PopularFacility/>
            <Notice/>
            <Slide/>
            <FAQ/>
        </div>
    );
}

export default MainPage;