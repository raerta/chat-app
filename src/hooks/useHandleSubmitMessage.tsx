import { useCallback } from "react";
import { useChatContext } from "@/context/chatContext";

const useHandleSubmitMessage = ({
  inputRef,
}: {
  inputRef?: React.RefObject<HTMLInputElement | undefined>;
}) => {
  const {
    messages,
    setMessages,
    inputValue,
    setInputValue,
    setShowAutoComplete,
    setShowComboBox,
    setLoading,
    loading,
    setError,
  } = useChatContext();

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      setLoading(true);
      const messageText = inputValue.trim();

      setTimeout(() => {
        if (messageText.startsWith("/image")) {
          const parts = messageText.split(" ");
          const imageIndex = parseInt(parts[1], 10);

          if (!isNaN(imageIndex)) {
            setMessages([
              ...messages,
              {
                text: `https://picsum.photos/seed/${imageIndex}/400/400`,
                isUser: false,
              },
            ]);
          } else {
            setError({ status: true, messages: ["Image index not valid"] });
          }
        } else if (messageText === "/select") {
          setShowComboBox(true);
        } else {
          setMessages([...messages, { text: messageText, isUser: true }]);
        }
        setLoading(false);
        setInputValue("");
        console.log("inputref", inputRef?.current);
        setTimeout(() => {
          inputRef?.current!.focus();
        }, 200);
      }, 500);
      setShowAutoComplete(false);
    }
  };

  const handleSubmitMessage = useCallback(handleSendMessage, [
    inputValue,
    messages,
    loading,
    setLoading,
  ]);

  const handleSelectOption = (option: string) => {
    setMessages([...messages, { text: option, isUser: true }]);
    setShowComboBox(false);
  };

  const handleAutoCompleteClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowAutoComplete(false);
  };

  return {
    handleSubmitMessage,
    handleSelectOption,
    handleAutoCompleteClick,
  };
};

export default useHandleSubmitMessage;
