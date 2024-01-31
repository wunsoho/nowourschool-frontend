import React, { useState } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContent, CategoryHeader, CategoryBack, CategoryTitle, CategorySearch, CategoryAll, Category1st, Category2nd } from "../styled/CategoryBuilding.styled";

export default function CategoryBuilding() {
  const [selected1stCategory, setSelected1stCategory] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleBackClick = () => {
    window.history.back();
  };

  const handle1stCategoryClick = (Firstcategory) => {
    setSelected1stCategory(Firstcategory);
    setSelected(Firstcategory);
  };

  return (
    <CategoryContent>
      <CategoryHeader>
          <CategoryBack onClick={handleBackClick}>
            <FontAwesomeIcon
                icon="chevron-left"
                style={{ fontSize: '1.5em' , color: '#000000'}} />
          </CategoryBack>
          <CategoryTitle>카테고리</CategoryTitle>
          <CategorySearch to="/search">
            <FontAwesomeIcon
                icon="magnifying-glass"
                style={{ fontSize: '1.5em' , color: '#000000'}} />
          </CategorySearch>
      </CategoryHeader>
      <CategoryAll>
        <Category1st>
          <div onClick={() => handle1stCategoryClick("건물별")} className={selected === "건물별" ? "active" : ""}>건물별</div>
          <div onClick={() => handle1stCategoryClick("테마별")} className={selected === "테마별" ? "active" : ""}>테마별</div>
        </Category1st>
        {selected1stCategory === "건물별" && (
          <Category2nd>
            <div>01호관-화학공학관</div>
            <div>02호관-기계항공관</div>
            <div>03호관-공학행정관</div>
            <div>05호관-산학협력리더스홀</div>
            <div>06호관-조형관</div>
            <div>07호관-전기/컴퓨터 공학관</div>
            <div>08호관-자연과학관</div>
            <div>09호관-대학회관/해송홀</div>
            <div>10호관-문수관</div>
            <div>11호관-교수연구동</div>
            <div>12호관-체육관</div>
            <div>13호관-동아리관1</div>
            <div>14호관-인문관</div>
            <div>15호관-사회과학관</div>
            <div>16호관-아산도서관</div>
            <div>24호관-경영관</div>
            <div>28호관-예술관(미술학부)</div>
            <div>29호관-예술관(음악학부)</div>
          </Category2nd>
        )}
        {selected1stCategory === "테마별" && (
          <Category2nd>
            <div>구내복사</div>
            <div>무인주차정산</div>
            <div>안전지키미</div>
            <div>야외식물원</div>
            <div>운동시설</div>
            <div>울산전파천문대</div>
            <div>유학원</div>
            <div>은행</div>
            <div>의료</div>
            <div>자동증명발급기</div>
            <div>전기차충전소</div>
            <div>중앙잔디</div>
            <div>카셰어링</div>
            <div>카페</div>
            <div>편의점</div>
            <div>학생식당/교직원식당</div>
            <div>학생휴게실&음악감상실</div>
            <div>휴게실</div>           
          </Category2nd>
        )}
      </CategoryAll>
    </CategoryContent>
  );
}