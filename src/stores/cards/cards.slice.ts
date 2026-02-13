import { type cardTypes } from "@/types/index";
import type { StateCreator } from "zustand";

export interface CardsSlice {
  cards: cardTypes[];
  addCard: (card: cardTypes) => void;
}

export const createCardsSlice: StateCreator<CardsSlice> = (set) => ({
  cards: [
    {
      listId: "list-1",
      cardId: 1,
      title: "Card's Title",
      description:
        "This is a description preview. For more details go to edit mode",
      priority: "low",
    },
    {
      listId: "list-1",
      cardId: 2,
      title: "Card's Title",
      description:
        "This is a description preview. For more details go to edit mode",
      priority: "low",
    },
    {
      listId: "list-2",
      cardId: 3,
      title: "Card's Title",
      description:
        "This is a description preview. For more details go to edit mode",
      priority: "low",
    },
  ],
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
});
