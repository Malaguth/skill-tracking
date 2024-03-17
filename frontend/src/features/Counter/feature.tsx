import { useCounter } from "../../contexts/CounterContext/context";
import * as TEXT from "../../assets/strings";
import DefaultButton from "../../components/Buttons/DefaultButton/comp";

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>
        {TEXT.COUNTER}
        {count}
      </h2>
      <DefaultButton
        label={TEXT.INCREMENT}
        onClick={increment}
        variant="primary"
      />
      <DefaultButton
        label={TEXT.DECREMENT}
        onClick={decrement}
        variant="secondary"
      />
    </div>
  );
};

export default Counter;
