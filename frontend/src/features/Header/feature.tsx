import React from 'react';
import * as Styled from './styles';
import { useCounter } from '../../contexts/CounterContext/context';
import * as TEXT from '../../assets/strings';
import DefaultIcon from '../../components/DefaultIcon/comp';
import { RoutesEnum } from '../../routes/enums';

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
