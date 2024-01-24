import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Categories from "./components/Categories/Categories";
import Study from "./components/Categories/Study";
import Semina from "./components/Categories/Semina";
import Sportfacilities from "./components/Categories/SportFacilities";
import CultureSpace from "./components/Categories/CultureSpace";
import PrinterPC from "./components/Categories/PrinterPC";
import PopularFacility from "./components/PopularFacilities/PopularFacility";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Slide from "./components/Slide/Slide";
import CarouselG from "./components/ProfileBox/carouselG";
import CarouselN from "./components/ProfileBox/carouselN";
import Notice from "./components/Notice/Notice";

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
        <NavigationBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
