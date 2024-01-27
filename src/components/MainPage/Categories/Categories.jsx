import React from "react";
import { Link } from "react-router-dom";
import StudyBook from "../Image/StudyBook.png";
import Idea from "../Image/Idea.png";
import Sports from "../Image/Sports.png";
import Music from "../Image/Music.png";
import Laptop from "../Image/Laptop.png";
import * as C from  "../Categories/Styles/Categories.style";

// #F1FFF3

function Categories(){
    return(
        <C.EntireCategoryBackground>
            <Link to="/study"
            style={{
                marginLeft: "4.3vw",
                margin: "0px 3vw 0px 3vw",
                color: "black",
                textDecoration: "none",
            }}target="_self">
                <C.SemiCategory1>
                    <img src={StudyBook} alt="study" style={{paddingLeft: "2vw", marginBottom:"-1vh"}}/>
                    <p style={{color:"#5C5D61", fontSize: "12px", textAlign: "center"}}>스터디</p>
                </C.SemiCategory1>
            </Link>

            <Link to="/semina"
            style={{
                margin: "0px 3vw 0px 3vw",
                color: "black",
                textDecoration: "none",
            }}>
                <C.SemiCategory1>
                    <img src={Idea} alt="semina" style={{paddingLeft: "2vw", marginBottom:"-1vh"}}/>
                    <p style={{color:"#5C5D61", fontSize: "12px", textAlign: "center"}}>세미나</p>
                </C.SemiCategory1>
            </Link>

            <Link to="/sportfacilities"
            style={{
                margin: "0px 3vw 0px 3vw",
                color: "black",
                textDecoration: "none",
            }}>
                <C.SemiCategory1>
                    <img src={Sports} alt="sport" style={{paddingLeft: "2vw", marginBottom:"-1vh"}}/>
                    <p style={{color:"#5C5D61", fontSize: "12px", textAlign: "center"}}>체육시설</p>
                </C.SemiCategory1>
            </Link>

            <Link to="/culturespace"
            style={{
                margin: "0px 3vw 0px 3vw",
                color: "black",
                textDecoration: "none",
            }}>
                <C.SemiCategory1>
                    <img src={Music} alt="culture" style={{paddingLeft: "2vw", marginBottom:"-1vh"}}/>
                    <p style={{color:"#5C5D61", fontSize: "12px", textAlign: "center"}}>문화공간</p>
                </C.SemiCategory1>
            </Link>

            <Link to="/printerpc"
            style={{
                margin: "0px 3vw 0px 2vw",
                color: "black",
                textDecoration: "none",
            }}>
                <C.SemiCategory2>
                    <img src={Laptop} alt="printerpc" style={{paddingLeft: "2.9vw", marginBottom:"-1vh"}}/>
                    <p style={{color:"#5C5D61", fontSize: "12px", textAlign: "center"}}>프린터/PC</p>
                </C.SemiCategory2>
            </Link>
        </C.EntireCategoryBackground>
    );
}

export default Categories;