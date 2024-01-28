import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContent, CategoryHeader, CategoryBack, CategoryTitle, CategorySearch } from "../styled/CategoryBuilding.styled";

export default function CategoryBuilding() {

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <CategoryContent>
      <CategoryHeader>
          <CategoryBack onClick={handleBackClick}>
            <FontAwesomeIcon
                icon="chevron-left"
                style={{ fontSize: '1.5em' }} />
          </CategoryBack>
          <CategoryTitle>카테고리</CategoryTitle>
          <CategorySearch>
            <FontAwesomeIcon
                icon="magnifying-glass"
                style={{ fontSize: '1.5em' }} />
          </CategorySearch>
      </CategoryHeader>
    </CategoryContent>
  );
}