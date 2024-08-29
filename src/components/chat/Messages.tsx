import React from "react";
import styled from "@emotion/styled";
import { useChatContext } from "@/context/chatContext";

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
  background-color: #f9f9f9;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Message = styled.div<{ isUser: boolean }>`
  margin-bottom: 12px;
  padding: 10px;
  background-color: ${(props) => (props.isUser ? "#daf8cb" : "#e3e3e3")};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  border-radius: 12px;
  max-width: 70%;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 8px;
    font-size: 14px;
  }
`;

const Messages = () => {
  const { messages } = useChatContext();
  return (
    <MessagesContainer>
      {messages.map((message, index) =>
        message.text.startsWith("https://picsum.photos/") ? (
          <Message key={index} isUser={message.isUser}>
            <img
              src={message.text}
              alt="Random"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Message>
        ) : (
          <Message key={index} isUser={message.isUser}>
            {message.text}
          </Message>
        )
      )}
    </MessagesContainer>
  );
};

export default Messages;
