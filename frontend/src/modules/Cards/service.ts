import { shuffleDeck, drawCard } from '../Cards/client';
import {Card, Deck} from '../Cards/types'; 
import { mapDrawCardResponseToCard, mapShuffleDeckResponseToDeck, mapUpdatedDeckFromDraw } from './mapper';

export const shuffleDeckService = async ({deckCount}:{deckCount: number}): Promise<Deck> => {
  try {
    return mapShuffleDeckResponseToDeck({shuffleDeck:await shuffleDeck({deckCount: deckCount})}) ;
  } catch (error) {
    throw new Error('Failed to shuffle deck');
  }

};

export const drawACardService = async ({ deckId }: { deckId: string }): Promise<{ card: Card; deck: Deck }> => {
  try {
    const cards = await drawCard({ deckId: deckId, numOfCards: 1 });
    const drawnCard = mapDrawCardResponseToCard({ drawCards: cards })[0];
    const updatedDeck = mapUpdatedDeckFromDraw({ drawCards: cards });
    return { card: drawnCard, deck: updatedDeck };
  } catch (error) {
    throw new Error('Failed to draw card');
  }
};
