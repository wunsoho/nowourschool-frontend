import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FAQBoardContainer, FAQBoardSimple, FAQTitle, ExpandButton, FAQBoardDetail, FAQDetail } from "./FAQBoard.styled"

const FAQBoard = ({ title, initialContent }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <FAQBoardContainer>
      <FAQBoardSimple>
        <FAQTitle>{title}</FAQTitle>
        <ExpandButton onClick={handleToggle}>
          <FontAwesomeIcon icon={expanded ? "minus" : "plus"}
                style={{ fontSize: '1.5em' }} />
        </ExpandButton>
      </FAQBoardSimple>
      <FAQBoardDetail expanded={expanded}>
        <FAQDetail style={{ whiteSpace: 'pre-line' }}>{initialContent}</FAQDetail>
      </FAQBoardDetail>
    </FAQBoardContainer>
  );
};

export default FAQBoard;