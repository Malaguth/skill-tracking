import * as Styled from './Counter.styles';
import { useCounter } from '../../contexts/CounterContext/CounterContext';
import * as Text from '../../assets/strings';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>{Text.Counter}{count}</h2>
      <Styled.IncrementButton label="Increment" onClick={increment} />
      <Styled.DecrementButton label="Decrement" onClick={decrement} />
    </div>
  );
};

export default Counter;
