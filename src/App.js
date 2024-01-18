import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./component/Main/Main";
import Deatil1 from "./component/Detail/Detail1";
import './App.css';

function App() {  
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (  
    <BrowserRouter>
    <div>
      <Routes>
        <Route path ="/" element={<Main/>}/>
        <Route path ="/facility/1" element={<Deatil1/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
