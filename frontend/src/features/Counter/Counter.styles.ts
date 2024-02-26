import styled from 'styled-components';
import DefaultButton from '../../components/ui/Buttons/DefaultButton'

export const IncrementButton = styled(DefaultButton)`
  && {
    background-color: red;
  }
`;

export const DecrementButton = styled(DefaultButton)`
  && {
    color: green;
  }
`;