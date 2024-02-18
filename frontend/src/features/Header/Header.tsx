import React from 'react';
import * as Styled from './Header.styles';
import DefaultIcon from '../../components/ui/DefaultIcon/DefaultIcon';

const Header: React.FC = () => {
  return (
    <Styled.header>
        <Styled.CustomLink to="/">
        <h3>Skill-Track front draft</h3>
        <DefaultIcon imagePath='skillTrackingLogoExample' size='small' />
        </Styled.CustomLink>
        <h3>Counter: </h3>
        <Styled.CustomLink to="/deck-of-cards">Deck of Cards</Styled.CustomLink>
    </Styled.header>
  );
};

export default Header;
