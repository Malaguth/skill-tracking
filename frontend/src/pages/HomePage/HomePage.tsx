import React from 'react';
import Counter from '../../features/Counter/Counter';
import Header from '../../features/Header/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Counter />
    </div>
  );
};

export default HomePage;