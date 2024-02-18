import React from "react";
import { NotiBoardContainer, NotiBoardSimple, NotiTitle, NotiDate } from "./NotificationBoard.styled"

const NotiBoard = ({ onClick, id, title, date }) => {

  return (
    <NotiBoardContainer onClick={onClick}>
      <NotiBoardSimple>
        <NotiTitle>{title}</NotiTitle>
        <NotiDate>{date}</NotiDate>
      </NotiBoardSimple>
    </NotiBoardContainer>
  );
};

export default NotiBoard;