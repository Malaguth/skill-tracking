import { shuffleDeck, drawCard } from '../Cards/client';
import {Card, Deck} from '../Cards/types'; 
import { mapDrawCardResponseToCard, mapShuffleDeckResponseToDeck } from './mapper';

export const shuffleDeckService = async ({deckCount}:{deckCount: number}): Promise<Deck> => {
  try {
    return mapShuffleDeckResponseToDeck({shuffleDeck:await shuffleDeck({deckCount: deckCount})}) ;
  } catch (error) {
    throw new Error('Failed to shuffle deck');
  }

};

export const drawACardService = async ({deckId}:{deckId: string}): Promise<Card> => {
  try {
     return mapDrawCardResponseToCard({drawCards:await drawCard({deckId:deckId, numOfCards:1})})[0];
  } catch (error) {
    throw new Error('Failed to draw card');
  }
};
