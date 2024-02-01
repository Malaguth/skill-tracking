import React from 'react';
import CounterFeature from '../features/CounterFeature';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <CounterFeature />
    </div>
  );
};

export default HomePage;
