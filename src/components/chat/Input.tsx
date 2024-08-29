import React from "react";
import styled from "@emotion/styled";
import { useChatContext } from "@/context/chatContext";
import useHandleSubmitMessage from "@/hooks/useHandleSubmitMessage";
import { chatPhrases } from "@/data/data";

const InputElem = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 16px;

  &:disabled {
    background-color: #babcbe;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const Input = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  const {
    inputValue,
    setInputValue,
    setAutoCompleteSuggestions,
    setShowAutoComplete,
    loading,
  } = useChatContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.startsWith("/")) {
      setShowAutoComplete(false);
    } else {
      const filteredSuggestions = chatPhrases.filter((phrase) =>
        phrase.toLowerCase().includes(value.toLowerCase())
      );
      setAutoCompleteSuggestions(filteredSuggestions);
      setShowAutoComplete(filteredSuggestions.length > 0);
    }
  };

  const { handleSubmitMessage } = useHandleSubmitMessage();

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.code === "Enter") && !e.shiftKey) {
      e.preventDefault();
      handleSubmitMessage();
    }
  };

  return (
    <InputElem
      ref={inputRef}
      disabled={loading}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={(e) => onEnterPress(e)}
      placeholder="Mesajınızı yazın..."
    />
  );
};

export default Input;
