import * as Styled from './Counter.styles';
import { useCounter } from '../../contexts/CounterContext/CounterContext';
import * as TEXT from '../../assets/strings';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>{TEXT.COUNTER}{count}</h2>
      <Styled.IncrementButton label={TEXT.INCREMENT} onClick={increment} />
      <Styled.DecrementButton label={TEXT.DECREMENT} onClick={decrement} />
    </div>
  );
};

export default Counter;
