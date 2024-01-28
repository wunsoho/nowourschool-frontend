import React, { useState } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FAQContent, FAQHeader, FAQBack, FAQTitle, FAQSortDiv, FAQSort, FAQBoard, FAQInquiry } from "../styled/FAQ.styled";
import Board from "../components/FAQBoard";

export default function FAQ() {
  const [selectedSort, setSelectedSort] = useState("예약/반납");

  const handleSortClick = (sort) => {
    setSelectedSort(sort);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <FAQContent>
      <FAQHeader>
        <FAQBack onClick={handleBackClick}>
          <FontAwesomeIcon
              icon="chevron-left"
              style={{ fontSize: '1.5em' }} />
        </FAQBack>
        <FAQTitle>FAQ</FAQTitle>
      </FAQHeader>
      <FAQSortDiv>
        <FAQSort
          onClick={() => handleSortClick("예약/반납")}
          className={selectedSort === "예약/반납" ? "active" : ""}
        >
            예약/반납
        </FAQSort>
        <FAQSort
          onClick={() => handleSortClick("가입/탈퇴")}
          className={selectedSort === "가입/탈퇴" ? "active" : ""}
        >
            가입/탈퇴
        </FAQSort>
        <FAQSort
          onClick={() => handleSortClick("기타")}
          className={selectedSort === "기타" ? "active" : ""}
        >
            기타
        </FAQSort>
      </FAQSortDiv>
      <FAQBoard>
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
        <Board title="시설물 예약은 어떻게 하나요?" initialContent={'시설물 예약 방법은 ~~~\n~~~~~~~~~~\n~~~~~~~~~'} />
      </FAQBoard>
      <FAQInquiry to="/inquiry">문의하기</FAQInquiry>
    </FAQContent>
  );
}