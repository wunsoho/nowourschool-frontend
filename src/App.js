import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Map from "./pages/Map";
import MyPage from "./pages/MyPage";
import Category from "./pages/CategoryBuilding"
import Search from "./pages/Search";
import DetailInfo from "./pages/DetailInfo"
import Notification from "./pages/Notification"
import NotificationView from "./pages/NotificationView"
import FAQ from "./pages/FAQ"
import Inquiry from "./pages/Inquiry"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <NavigationBar />
          </>} />
        <Route path="/reservation" element={
          <>
            <Reservation />
            <NavigationBar />
          </>} />
        <Route path="/map" element={
          <>
            <Map />
            <NavigationBar />
          </>} />
        <Route path="/mypage" element={
          <>
            <MyPage />
            <NavigationBar />
          </>} />
        <Route path="/map/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detailinfo" element={<DetailInfo />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/notificationView" element={<NotificationView />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </div>
  );
}

export default App;