import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Categories from "./components/MainPage/Categories/Categories";
import Study from "./components/MainPage/Categories/Study";
import Semina from "./components/MainPage/Categories/Semina";
import Sportfacilities from "./components/MainPage/Categories/SportFacilities";
import CultureSpace from "./components/MainPage/Categories/CultureSpace";
import PrinterPC from "./components/MainPage/Categories/PrinterPC";
import PopularFacility from "./components/MainPage/PopularFacilities/PopularFacility";
import NavigationBar from "./components/MainPage/NavigationBar/NavigationBar";
import Slide from "./components/MainPage/Slide/Slide";
import CarouselG from "./components/MainPage/ProfileBox/carouselG";
import CarouselN from "./components/MainPage/ProfileBox/carouselN";
import Notice from "./components/MainPage/Notice/Notice";
import FAQ from "./components/MainPage/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarouselN/>
        <Categories/>
        <Routes>
          <Route path="/study" element={<Study/>}/>
          <Route path="/semina" element={<Semina/>}/>
          <Route path="/sportfacilities" element={<Sportfacilities/>}/>
          <Route path="/culturespace" element={<CultureSpace/>}/>
          <Route path="/printerpc" element={<PrinterPC/>}/>
        </Routes>
        <PopularFacility/>
        <Notice/>
        <Slide/>
        <FAQ/>
        <NavigationBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
