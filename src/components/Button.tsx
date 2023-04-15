import { FC } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton = styled.button`
  margin: 10px 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #30d5c8;
  border: 3px solid #27beb2;
  border-radius: 5px;

  width: 100%;

  :hover {
    opacity: 0.6;
  }
`;

const Button: FC<Props> = ({ children, ...props }: any) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
