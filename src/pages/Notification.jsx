import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NotiContent, NotiHeader, NotiBack, NotiTitle, NotiSort, NotiSortDiv, NotiBoard } from "../styled/Notification.styled";
import Board from "../components/NotificationBoard";

export default function Announcement() {  
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <NotiContent>
      <NotiHeader>
          <NotiBack onClick={handleBackClick}>
            <FontAwesomeIcon
                icon="chevron-left"
                style={{ fontSize: '1.5em' }} />
          </NotiBack>
          <NotiTitle>공지사항</NotiTitle>
      </NotiHeader>
      <NotiSortDiv>
        <NotiSort>
          <option value="all">전체</option>
          <option value="academic_notice">학사공지</option>
          <option value="information">안내</option>
        </NotiSort>
      </NotiSortDiv>
      <NotiBoard>
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[안내] 열린열람실 사용제한 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
        <Board title="[학사공지] 겨울 계절학기 성적열람 안내" date={'2024-01-20'} />
      </NotiBoard>
    </NotiContent>
  );
}