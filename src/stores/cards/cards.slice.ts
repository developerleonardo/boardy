import { type cardTypes } from "@/types/index";
import type { StateCreator } from "zustand";
import { v4 as uuid } from "uuid";

export interface CardsSlice {
  cards: cardTypes[];
  addCard: (listId: string) => void;
}

export const createCardsSlice: StateCreator<CardsSlice> = (set) => ({
  cards: [],
  addCard: (listId) =>
    set((state) => ({
      cards: [
        ...state.cards,
        {
          listId,
          cardId: uuid(),
          title: "Card's Title",
          description:
            "This is a description preview. For more details go to edit mode",
          priority: "low",
        },
      ],
    })),
});
