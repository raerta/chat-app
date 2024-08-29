import React from "react";
import styled from "@emotion/styled";
import { useChatContext } from "@/context/chatContext";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;

  width: calc(100% - 16px);
  z-index: 10;
`;

const AutoCompleteItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e3e3e3;
  }
`;

const AutoCompleteList = ({
  handleAutoCompleteClick,
}: {
  handleAutoCompleteClick: (val: string) => void;
}) => {
  const { autoCompleteSuggestions } = useChatContext();
  return (
    <List>
      {autoCompleteSuggestions.map((suggestion, index) => (
        <AutoCompleteItem
          key={index}
          onClick={() => handleAutoCompleteClick(suggestion)}
        >
          {suggestion}
        </AutoCompleteItem>
      ))}
    </List>
  );
};

export default AutoCompleteList;
