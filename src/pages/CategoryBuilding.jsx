import React, { useState, useEffect, useRef } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContent, CategoryHeader, CategoryBack, CategoryTitle, CategorySearch, CategoryAll, Category1st, Category2nd, Category3rd } from "../styled/CategoryBuilding.styled";

export default function CategoryBuilding() {
  const [selected1stCategory, setSelected1stCategory] = useState("건물별");
  const [selected2ndCategory, setSelected2ndCategory] = useState(null);
  const [selected3rdCategory, setSelected3rdCategory] = useState(null);
  const category2ndSelectedRef = useRef(null);

  const handleBackClick = () => {
    window.history.back();
  };

  const topCategories = ["건물별", "테마별"];
  const categoriesMap = {
    "건물별": {
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
      "07호관-전기/컴퓨터공학관" :[
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
    },
    "테마별": {
      "구내복사" :[
        "국제관",
        "기린관",
        "아산도서관",
        "아산도서관 신관",
        "학생회관",
      ],
      "무인주차정산" :[
        "국제관",
        "사회과학관",
      ],
      "안전지키미" :[
      ],
      "야외식물원" :[
      ],
      "운동시설" :[
        "교직원테니스코트",
        "농구장",
        "농구장2",
        "농구장3",
        "선수테니스코트",
        "씨름훈련장",
        "야외헬스장",
        "족구장",
        "축구장",
        "축구장1",
        "풋살축구장",
        "학생테니스코트"
      ],
      "울산전파천문대" :[
      ],
      "유학원" :[
      ],
      "은행" :[
        "경남은행 365 ATM_1",
        "경남은행 365 ATM_2",
        "경남은행 365 ATM_3",
        "경남은행 365 ATM_4",
        "경남은행 365 ATM_5",
        "우편취급국"
      ],
      "의료" :[
        "의무실",
        "체력인증센터",
        "헌혈의집",
      ],
      "자동증명발급기" :[
        "국제관",
        "학생생활관",
      ],
      "전기차충전소" :[
        "KCC 생활관",
        "국제관",
        "사회과학관",
        "체육관",
      ],
      "중앙잔디" :[
      ],
      "카셰어링" :[
        "그린카 KCC 생활관",
        "그린카 아산도서관 신관",
      ],
      "카페" :[
        "11호관 커피숍",
        "구내서점 & 북카페",
        "커피명가",
      ],
      "편의점" :[
        "이마트24(1호점)",
        "이마트24(2호점)",
        "이마트24(3호점)",
      ],
      "학생식당/교직원식당" :[
      ],
      "학생휴게실&음악감상실" :[
      ],
      "휴게실" :[
        "라운지 아산도서관",
        "라운지 아산도서관 신관",
        "라운지 학생회관",
        "라운지 해송홀",
      ]
    }
  };

  useEffect(() => {
    if (category2ndSelectedRef.current && selected2ndCategory) {
      category2ndSelectedRef.current.scrollTo({
        left: category2ndSelectedRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  }, [selected2ndCategory]);

  const handle1stCategoryClick = (Firstcategory) => {
    setSelected1stCategory(Firstcategory);
    setSelected2ndCategory(null);
    setSelected3rdCategory(null);
  };

  const handle2ndCategoryClick = (Secondcategory) => {
    if (!categoriesMap[selected1stCategory][Secondcategory].length) {
      window.location.href = "/detailinfo";
      return;
    }
    setSelected2ndCategory(Secondcategory);
    setSelected3rdCategory(null);
  };

  const handle3rdCategoryClick = (Thirdcategory) => {
    window.location.href = "/detailinfo";
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
      <CategoryAll ref={category2ndSelectedRef}>
        <Category1st>
          {topCategories.map(category => (
            <div key={category} onClick={() => handle1stCategoryClick(category)} className={selected1stCategory === category ? "active" : ""}>
              {category}
            </div>
          ))}
        </Category1st>
        <Category2nd>
          {Object.entries(categoriesMap[selected1stCategory] || {}).map(([key, value]) => (
            <div key={key} onClick={() => handle2ndCategoryClick(key)} className={selected2ndCategory === key ? "active" : ""}>
              {key}
            </div>
          ))}
        </Category2nd>
        <Category3rd style={{ display: selected2ndCategory ? 'block' : 'none' }}>
          {selected1stCategory && selected2ndCategory && categoriesMap[selected1stCategory][selected2ndCategory].map((value, key) => (
            <div key={key} onClick={() => handle3rdCategoryClick(value)}>
              {value}
            </div>
          ))}
        </Category3rd>
      </CategoryAll>
    </CategoryContent>
  );
}