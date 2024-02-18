import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StudyBook from "../Image/StudyBook.png";
import Idea from "../Image/Idea.png";
import Sports from "../Image/Sports.png";
import Music from "../Image/Music.png";
import Laptop from "../Image/Laptop.png";
import * as C from  "../Categories/Styles/Categories.style";

// #F1FFF3

function Categories(){

    const {study} = "study";
    const {seminar} = "seminar";
    const {sports} = "sports";
    const {cultural} = "cultural";
    const {print} = "print";

    const navigate = useNavigate();
    const handleKeyword_study = () =>{
        navigate('/study',{
            state: {
                keyword:{study}
            }
        });

    }
    const handleKeyword_seminar = () =>{
        navigate('/semina',{
            state: {
                keyword:{seminar}
            }
        });

    }
    const handleKeyword_sports = () =>{
        navigate('/sportfacilities',{
            state: {
                keyword:{sports}
            }
        });

    }
    const handleKeyword_cultural = () =>{
        navigate('/culturespace',{
            state: {
                keyword:{cultural}
            }
        });

    }
    const handleKeyword_print = () =>{
        navigate('/printerpc',{
            state: {
                keyword:{print}
            }
        });

    }

    return(
        <C.EntireCategoryBackground>
            <Link to="/study"
            onClick={handleKeyword_study}
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
            onClick={handleKeyword_seminar}
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
            onClick={handleKeyword_sports}
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
            onClick={handleKeyword_cultural}
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
            onClick={handleKeyword_print}
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