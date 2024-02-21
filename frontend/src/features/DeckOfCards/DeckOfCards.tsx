import React, { useEffect, useState } from 'react';
import DefaultButton from '../../components/ui/Buttons/DefaultButton/DefaultButton';
import DefaultIcon from '../../components/ui/DefaultIcon/DefaultIcon';
import { shuffleDeckService, drawACardService } from '../../modules/Cards/service';
import { Card, Deck } from '../../modules/Cards/types';
import * as TEXT from '../../assets/strings';


const DeckOfCards: React.FC = () => {
  const [deck, setDeck] = useState<Deck | null>(null);
  const [lastCard, setLastCard] = useState<Card | null>(null);

  useEffect(() => {
    async function fetchInitialDeck() {
      try {
        const initialDeck = await shuffleDeckService({ deckCount: 1 });
        setDeck(initialDeck);
      } catch (error) {
        console.error('Failed to fetch initial deck:', error);
      }
    }
    fetchInitialDeck();
  }, []);

  const handleShuffleDeck = async () => {
    try {
      const shuffledDeck = await shuffleDeckService({ deckCount: 1 });
      setDeck(shuffledDeck);
      setLastCard(null);
    } catch (error) {
      console.error('Failed to shuffle deck:', error);
    }
  };

  const handleDrawCard = async () => {
    if (!deck) return;
    try {
      const { card, deck: updatedDeck } = await drawACardService({ deckId: deck.deck_id });
      setDeck(updatedDeck);
      setLastCard(card);
    } catch (error) {
      console.error('Failed to draw card:', error);
    }
  };

  return (
    <div>
      <h2>{TEXT.DECK}</h2>
      <DefaultIcon imagePath="deck" size="medium" />
      {deck && (
        <div>
          <h3>{TEXT.REMAINING_CARDS}{deck.remaining}</h3>
        </div>
      )}
      <div style={{ flexDirection: 'row' }}>
        <DefaultButton label={TEXT.SHUFFLE_DECK} onClick={handleShuffleDeck} />
        <DefaultButton label={TEXT.DRAW} onClick={handleDrawCard} />
      </div>
      {lastCard && <DefaultIcon imagePath={lastCard.image} size="small"  external={true}/>}
    </div>
  );
};

export default DeckOfCards;
