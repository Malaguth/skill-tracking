import React from 'react';
import * as Styled from './DefaultButton.styles';

interface IButtonProps {
  label: string;
  onClick: () => void;
}

const DefaultButton: React.FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      {label}
    </Styled.Button>
  );
};

export default DefaultButton;