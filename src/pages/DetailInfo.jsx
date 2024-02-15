import React from "react";
import { useLocation } from 'react-router-dom';

export default function DetaolInfo() {
  const location = useLocation();
  console.log(location.state.id);
  
  return (
    <div>건물 상세정보 화면</div>
  );
}