import React from 'react';
import Header from '../../features/Header/Header';
import DeckOfCards from '../../features/DeckOfCards/DeckOfCards';

const CardPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <DeckOfCards/>
    </div>
  );
};

export default CardPage;