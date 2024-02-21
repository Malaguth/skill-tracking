import React from 'react';
import * as Styled from './Header.styles';
import DefaultIcon from '../../components/ui/DefaultIcon/DefaultIcon';
import { RoutesEnum } from '../../routes';
import { useCounter } from '../../contexts/CounterContext/CounterContext';
import * as TEXT from '../../assets/strings';

const Header: React.FC = () => {

  const { count } = useCounter();


  return (
    <Styled.header> 
        <nav>
          <Styled.ul>
            <li>
              <Styled.CustomLink to={RoutesEnum.HOME} end>
                <h3>{TEXT.SKILL_TRACK_TITTLE}</h3>
                <DefaultIcon imagePath='skillTrackingLogoExample' size='small' />
              </Styled.CustomLink>
            </li>
            <li><Styled.CustomLink to={RoutesEnum.DECK}>{TEXT.DECK_OF_CARDS}</Styled.CustomLink></li>
            <li>{TEXT.COUNTER}{count}</li>
          </Styled.ul>
        </nav>
    </Styled.header>
  );
};

export default Header;
