import React from 'react';
import * as Styled from './styles';
import getAsset from '../../assets/getAsset';

type IIconProps = {
  imagePath: string;
  size: 'small' | 'medium' | 'large';
  external?: Boolean
}

const DefaultIcon: React.FC<IIconProps> = ({ imagePath, size, external }) => {

  return (
    <Styled.IconContainer>
      <Styled.IconImage src={external ? `${imagePath}` : getAsset({asset: imagePath})} size={size} />
    </Styled.IconContainer>
  );
};

export default DefaultIcon;