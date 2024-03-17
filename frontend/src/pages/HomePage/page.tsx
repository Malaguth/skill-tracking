import React from 'react';
import * as TEXT from "../../assets/strings";
import Counter from '../../features/Counter/feature';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>{TEXT.HOME_PAGE}</h1>
      <Counter />
    </div>
  );
};

export default HomePage;