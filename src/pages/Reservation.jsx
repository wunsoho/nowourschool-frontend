import React, { useState } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReservationContent, ReservationHeader, ReservationTitle, ReservationSearch, ReservationCategoryAll, ReservationCategory1st, ReservationCategory2nd, List2nd } from "../styled/Reservation.styled";

export default function Reservation() {
  const [selected1stCategory, setSelected1stCategory] = useState("01호관-화학공학관");
  const [selected2ndCategory, setSelected2ndCategory] = useState(null);

  const buildingCategories = [
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
  ];

  const categoriesMap = {
    "01호관-화학공학관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "02호관-기계항공관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "03호관-공학행정관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "05호관-산학협력리더스홀" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "06호관-조형관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "07호관-전기/컴퓨터 공학관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "08호관-자연과학관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "09호관-대학회관/해송홀" :[
      "대강당",
      "소강당",
    ],
    "10호관-문수관" :[
      "101호 강의실",
      "102호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "11호관-교수연구동" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "12호관-체육관" :[
      "네트",
      "골대",
    ],
    "13호관-동아리관1" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "14호관-인문관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "15호관-사회과학관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "16호관-아산도서관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "24호관-경영관" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "28호관-예술관(미술학부)" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
    ],
    "29호관-예술관(음악학부)" :[
      "101호 강의실",
      "102호 강의실",
      "103호 강의실",
      "201호 강의실",
      "202호 강의실",
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
    <ReservationContent>
      <ReservationHeader>
          <ReservationTitle>예약</ReservationTitle>
          <ReservationSearch to="/search">
            <FontAwesomeIcon
                icon="magnifying-glass"
                style={{ fontSize: '1.5em' , color: '#000000'}} />
          </ReservationSearch>
      </ReservationHeader>
      <ReservationCategoryAll>
      <ReservationCategory1st>
          {buildingCategories.map(category => (
            <div key={category} onClick={() => handle1stCategoryClick(category)} className={selected1stCategory === category ? "active" : ""}>
              {category}
            </div>
          ))}
        </ReservationCategory1st>
        <ReservationCategory2nd>
          {(categoriesMap[selected1stCategory] || []).map(category => (
            <List2nd to="detail" key={category} onClick={() => handle2ndCategoryClick(category)} className={selected2ndCategory === category ? "active" : ""}>
              {category}
            </List2nd>
          ))}
        </ReservationCategory2nd>
      </ReservationCategoryAll>
    </ReservationContent>
  );
}