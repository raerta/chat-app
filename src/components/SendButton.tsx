"use client";
import React from "react";
import { Button } from "./UI/Button";
import { useChatContext } from "@/context/chatContext";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const SendButton = ({ children, onClick }: IProps) => {
  const { loading } = useChatContext();
 
  return (
    <Button role="button" disabled={loading} onClick={onClick}>
      {children}
    </Button>
  );
};

export default SendButton;
