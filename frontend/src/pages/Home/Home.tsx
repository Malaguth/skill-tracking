import React from 'react';
import Counter from '../../features/Counter/Counter';
import DeckOfCards from '../../features/DeckOfCards/DeckOfCards';
import DefaultIcon from '../../components/ui/DefaultIcon/DefaultIcon';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Skill-Track front draft</h1>
      <DefaultIcon imagePath='skillTrackingLogoExample' size='large' />
      <Counter />
      <DeckOfCards />
    </div>
  );
};

export default HomePage;