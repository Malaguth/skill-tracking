import React from 'react';
import * as Styled from './Header.styles';
import DefaultIcon from '../../components/ui/DefaultIcon/DefaultIcon';
import { RoutesEnum } from '../../routes';

const Header: React.FC = () => {
  return (
    <Styled.header>
        <nav>
          <Styled.ul>
            <li>
              <Styled.CustomLink to={RoutesEnum.HOME} end>
                <h3>Skill-Track front draft</h3>
                <DefaultIcon imagePath='skillTrackingLogoExample' size='small' />
              </Styled.CustomLink>
            </li>
            <li><Styled.CustomLink to={RoutesEnum.DECK}>Deck of Cards</Styled.CustomLink></li>
            <li>Count:</li>
          </Styled.ul>
        </nav>
    </Styled.header>
  );
};

export default Header;
