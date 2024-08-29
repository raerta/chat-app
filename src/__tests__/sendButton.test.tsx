import { render, screen } from "@testing-library/react";
import SendButton from "@/components/SendButton";
import { useChatContext } from "@/context/chatContext";

// useChatContext'i mock'lama
jest.mock("../context/chatContext.tsx", () => ({
  useChatContext: jest.fn(),
}));

describe("SendButton", () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the children correctly", () => {
    // useChatContext'in döndürdüğü değeri ayarlıyoruz
    (useChatContext as jest.Mock).mockReturnValue({ loading: false });

    render(<SendButton onClick={onClickMock}>Send</SendButton>);

    expect(screen.getByText("Send")).toBeInTheDocument();
  });
});
