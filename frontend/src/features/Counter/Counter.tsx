import React, { useState } from 'react';
import * as Styled from './Counter.styles';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Styled.IncrementButton label="Increment" onClick={increment} />
      <Styled.DecrementButton label="Decrement" onClick={decrement} />
    </div>
  );
};

export default Counter;
