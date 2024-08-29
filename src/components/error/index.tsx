import { useChatContext } from "@/context/chatContext";
import React, { useEffect } from "react";

const ErrorComponent = () => {
  const { error, setError } = useChatContext();
  useEffect(() => {
    if (error.status) {
      setTimeout(() => {
        setError({ status: false, messages: [""] });
      }, 3000);
    }
    return () => {};
  }, [error.status]);

  return (
    <div
      onClick={() => setError({ status: false, messages: [""] })}
      className={`flex w-screen h-screen justify-end items-end bg-gray-400/50 absolute inset-0 z-20 pr-4 pb-6 ${
        error.status ? "block" : "hidden"
      }`}
    >
      <ul className="w-52 min-h-32 border-2 border-red-600 bg-red-400 text-white font-semibold text-lg rounded-md p-2">
        {error.messages.map((msg, index) => (
          <li key={index}>* {msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorComponent;
