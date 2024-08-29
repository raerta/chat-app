import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #babcbe;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;
