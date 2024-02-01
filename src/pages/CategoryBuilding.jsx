import React, { useState, useEffect } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContent, CategoryHeader, CategoryBack, CategoryTitle, CategorySearch, CategoryAll, Category1st, Category2nd } from "../styled/CategoryBuilding.styled";

export default function CategoryBuilding() {
  const [selected1stCategory, setSelected1stCategory] = useState("건물별");
  const [selected2ndCategory, setSelected2ndCategory] = useState(null);

  const handleBackClick = () => {
    window.history.back();
  };

  const topCategories = ["건물별", "테마별"];
  const categoriesMap = {
    "건물별": [
      "01호관-화학공학관",
      "02호관-기계항공관",
      "03호관-공학행정관",
      "05호관-산학협력리더스홀",
      "06호관-조형관",
      "07호관-전기/컴퓨터 공학관",
      "08호관-자연과학관",
      "09호관-대학회관/해송홀",
      "10호관-문수관",
      "11호관-교수연구동",
      "12호관-체육관",
      "13호관-동아리관1",
      "14호관-인문관",
      "15호관-사회과학관",
      "16호관-아산도서관",
      "24호관-경영관",
      "28호관-예술관(미술학부)",
      "29호관-예술관(음악학부)"
    ],
    "테마별": [
      "구내복사",
      "무인주차정산",
      "안전지키미",
      "야외식물원",
      "운동시설",
      "울산전파천문대",
      "유학원",
      "은행",
      "의료",
      "자동증명발급기",
      "전기차충전소",
      "중앙잔디",
      "카셰어링",
      "카페",
      "편의점",
      "학생식당/교직원식당",
      "학생휴게실&음악감상실",
      "휴게실"
    ]
  };

  const handle1stCategoryClick = (Firstcategory) => {
    setSelected1stCategory(Firstcategory);
    setSelected2ndCategory(null);
  };

  const handle2ndCategoryClick = (category) => {
    setSelected2ndCategory(category);
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
          {topCategories.map(category => (
            <div key={category} onClick={() => handle1stCategoryClick(category)} className={selected1stCategory === category ? "active" : ""}>
              {category}
            </div>
          ))}
        </Category1st>
        <Category2nd>
          {(categoriesMap[selected1stCategory] || []).map(category => (
            <div key={category} onClick={() => handle2ndCategoryClick(category)} className={selected2ndCategory === category ? "active" : ""}>
              {category}
            </div>
          ))}
        </Category2nd>
      </CategoryAll>
    </CategoryContent>
  );
}