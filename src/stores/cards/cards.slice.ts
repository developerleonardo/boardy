import { type cardTypes } from "@/types/index";
import type { StateCreator } from "zustand";

interface CardsSlice {
  cards: cardTypes[];
  addCard: (card: cardTypes) => void;
}

export const createCardsSlice: StateCreator<CardsSlice> = (set) => ({
  cards: [
    {
      cardId: 1,
      title: "Card's Title",
      description:
        "This is a description preview. For more details go to edit mode",
      priority: "low",
    },
  ],
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
});
