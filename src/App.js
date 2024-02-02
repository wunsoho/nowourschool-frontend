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
import MyPage from "./components/MyPage/MyPage/MyPage";
import Header from "./components/MainPage/Header/Header";
import SearchTap from "./components/MainPage/SearchTap/SearchTap";
import SearchResults from "./components/MainPage/SearchTap/SearchResults";
import PlaceStates from "./components/MainPage/PopularFacilities/PlaceStates";
import Booking from "./components/MyPage/MyPage/PageFunctions/Booking";
import QnA from "./components/MyPage/MyPage/PageFunctions/QnA";
import Review from "./components/MyPage/MyPage/PageFunctions/Review";
import Account from "./components/MyPage/MyPage/PageFunctions/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path="/search" element={<SearchTap/>}/>
          <Route path="/results" element={<SearchResults/>}/>
        </Routes>
        {/* 검색 창 잠시 디자인 볼려고 이 위치에 배치 해놓음 추후에 onclick으로 연결시킬 예정 */} 
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
        <Routes>
          <Route path="/popularfacility/placestates" element={<PlaceStates/>}/>
        </Routes>
        <Notice/>
        <Slide/>
        <FAQ/>
        <NavigationBar/>
          <Routes>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/qna" element={<QnA/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
