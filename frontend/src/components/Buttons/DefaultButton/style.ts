import styled from "styled-components";
import theme from "../../../assets/theme";

type ButtonStyleProps = {
  variant: "primary" | "secondary" | "tertiary";
}

const variantStyles = {
  primary: {
    backgroundColor: theme.colors.tial[100],
    color: theme.colors.tial[200],
    borderColor: theme.colors.tial[200],
  },
  secondary: {
    backgroundColor: theme.colors.gray[50],
    color:  theme.colors.gray[200],
    borderColor:  theme.colors.gray[200],
  },
  tertiary: {
    backgroundColor: theme.colors.orange[100],
    color: theme.colors.singleton.white,
    borderColor: theme.colors.singleton.white,
  },
};

export const Button = styled.button<ButtonStyleProps>`
  margin: 16px;
  border-radius: 8px;
  padding: 8px;
  ${({ variant }) => variantStyles[variant]};
`;
