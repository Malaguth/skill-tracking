import styled from "styled-components";

type ButtonStyleProps = {
  variant: "primary" | "secondary" | "tertiary";
}

const variantStyles = {
  primary: {
    backgroundColor: "#1c9bbc",
    color: "#021c35",
    borderColor: "#021c35",
  },
  secondary: {
    backgroundColor: "#f0f0f0",
    color: "#333333",
    borderColor: "#333333",
  },
  tertiary: {
    backgroundColor: "#ff7f50",
    color: "#ffffff",
    borderColor: "#ffffff",
  },
};

export const Button = styled.button<ButtonStyleProps>`
  margin: 16px;
  border-radius: 8px;
  padding: 8px;
  ${({ variant }) => variantStyles[variant]};
`;
