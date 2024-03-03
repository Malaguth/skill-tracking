import { useCounter } from "../../contexts/CounterContext/CounterContext";
import * as TEXT from "../../assets/strings";
import DefaultButton from "../../components/ui/Buttons/DefaultButton/DefaultButton";

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
