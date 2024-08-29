"use client";

import React, { createContext, useContext, useState } from "react";
import { IError, IMessage } from "@/types/ChatTypes";

interface IChatContext {
  loading: boolean;
  showAutoComplete: boolean;
  showComboBox: boolean;
  error: IError;
  setLoading: (val: React.SetStateAction<boolean>) => void;
  setShowAutoComplete: (val: React.SetStateAction<boolean>) => void;
  messages: IMessage[] | [];
  setMessages: (value: React.SetStateAction<IMessage[]>) => void;
  setAutoCompleteSuggestions: (value: React.SetStateAction<string[]>) => void;
  setInputValue: (value: React.SetStateAction<string>) => void;
  autoCompleteSuggestions: string[];
  inputValue: string;
  setShowComboBox: (val: React.SetStateAction<boolean>) => void;
  setError: (value: React.SetStateAction<IError>) => void;
}

export const ChatContext = createContext<IChatContext>({
  setLoading: () => {},
  setShowComboBox: () => {},
  loading: false,
  showComboBox: false,
  showAutoComplete: false,
  messages: [],
  setMessages: () => {},
  setAutoCompleteSuggestions: () => {},
  setShowAutoComplete: () => {},
  setInputValue: () => {},
  autoCompleteSuggestions: [],
  inputValue: "",
  error: { messages: [""], status: false },
  setError: () => {},
});

export function useChatContext() {
  return useContext(ChatContext);
}

export default function ChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );

  const [error, setError] = useState<IError>({ status: false, messages: [""] });
  const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState<
    string[]
  >([]);

  const [inputValue, setInputValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [showComboBox, setShowComboBox] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        loading,
        setLoading,
        messages,
        setMessages,
        autoCompleteSuggestions,
        setAutoCompleteSuggestions,
        inputValue,
        setInputValue,
        setShowAutoComplete,
        showAutoComplete,
        setShowComboBox,
        showComboBox,
        error,
        setError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
