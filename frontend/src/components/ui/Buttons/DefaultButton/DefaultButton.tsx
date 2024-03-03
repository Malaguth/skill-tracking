import * as Styled from "./DefaultButton.styles";

type IButtonProps = {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "tertiary";
}

const DefaultButton: React.FC<IButtonProps> = ({ label, onClick, variant }) => {
  return (
    <Styled.Button onClick={onClick} variant={variant}>
      {label}
    </Styled.Button>
  );
};

export default DefaultButton;
