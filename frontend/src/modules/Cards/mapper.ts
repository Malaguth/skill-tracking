import { Card, Deck, DrawCardResponse, ShuffleDeckResponse } from '../Cards/types';

export const mapDrawCardResponseToCard = ({drawCards}:{drawCards: DrawCardResponse}): Card[] => {
  return drawCards.cards.map(card => ({
    code: card.code,
    image: card.image,
    value: card.value,
    suit: card.suit
  }));
};

export const mapShuffleDeckResponseToDeck = ({shuffleDeck}:{shuffleDeck: ShuffleDeckResponse}): Deck => {
  return {
    deck_id: shuffleDeck.deck_id,
    remaining: shuffleDeck.remaining
  };
};

export const mapUpdatedDeckFromDraw = ({drawCards}:{drawCards: DrawCardResponse}): Deck => {
  return {
    deck_id: drawCards.deck_id,
    remaining: drawCards.remaining
  };
};