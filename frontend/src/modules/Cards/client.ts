import axios from 'axios';
import { DrawCardResponse, ShuffleDeckResponse } from './types';

const baseURL = import.meta.env.VITE_EXAMPLE_URL as string;

const cardClient = axios.create({
  baseURL,
});

const shuffleDeck = async ({deckCount}:{deckCount: number}): Promise<ShuffleDeckResponse> => {
  try {
    const response = await cardClient.get(`${import.meta.env.VITE_EXAMPLE_ROUTE_1 as string}=${deckCount}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to shuffle deck');
  }
};

const drawCard = async ({deckId,numOfCards}:{deckId: string,numOfCards:number}): Promise<DrawCardResponse> => {
  try {
    const response = await cardClient.get(`/${deckId}${import.meta.env.VITE_EXAMPLE_ROUTE_2 as string}=${numOfCards}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to draw card');
  }
};

export const deckClient = {
  shuffleDeck,
  drawCard
}