import React from 'react';
import Counter from '../../features/Counter/Counter';
import * as TEXT from "../../assets/strings";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>{TEXT.HOME_PAGE}</h1>
      <Counter />
    </div>
  );
};

export default HomePage;