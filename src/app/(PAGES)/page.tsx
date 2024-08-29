"use client";
import React, { useRef } from "react";
import styled from "@emotion/styled";
import SendButton from "@/components/SendButton";
import useHandleSubmitMessage from "@/hooks/useHandleSubmitMessage";
import { useChatContext } from "@/context/chatContext";
import AutoCompleteList from "@/components/chat/AutoCompleteList";
import Input from "@/components/chat/Input";
import Messages from "@/components/chat/Messages";
import ErrorComponent from "@/components/error";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #ccc;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const ComboBox = styled.select`
  padding: 8px;
  margin-bottom: 8px;
  font-size: 16px;
`;

const Chat = () => {
  const { showAutoComplete, showComboBox, error } = useChatContext();

  const { handleSubmitMessage, handleSelectOption, handleAutoCompleteClick } =
    useHandleSubmitMessage();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (option: string) => {
    handleSelectOption(option);
    inputRef.current?.focus();
  };

  return (
    <ChatContainer>
      <ErrorComponent />
      <Messages />
      {showAutoComplete && (
        <AutoCompleteList handleAutoCompleteClick={handleAutoCompleteClick} />
      )}
      {showComboBox && (
        <ComboBox onChange={(e) => handleSelect(e.target.value)}>
          <option value="">Seçim Yapın</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </ComboBox>
      )}

      <InputContainer>
        <Input inputRef={inputRef} />
        <SendButton onClick={handleSubmitMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
