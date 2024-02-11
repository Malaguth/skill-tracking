export type Card = {
    code: string;
    image: string;
    value: string;
    suit: string;
};

export type Deck = {
    deck_id: string;
    remaining: number;
};

export type ShuffleDeckResponse = {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
};

export type DrawCardResponse = {
    success: boolean;
    deck_id: string;
    cards: CardResponse[];
    remaining: number;
};

export type CardResponse = {
    code: string;
    image: string;
    images: {
        svg: string;
        png: string;
    };
    value: string;
    suit: string;
};
