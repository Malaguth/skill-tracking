import styled from 'styled-components';
import DefaultButton from '../../components/Buttons/DefaultButton';

export const IncrementButton = styled(DefaultButton)`
  && {
    background-color: red;
    // Outras propriedades de estilo necessárias
  }
`;

export const DecrementButton = styled(DefaultButton)`
  && {
    color: green;
    // Outras propriedades de estilo necessárias
  }
`;
