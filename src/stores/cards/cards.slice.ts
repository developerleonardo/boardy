import { type cardTypes } from "@/types/index";
import type { StateCreator } from "zustand";
import { v4 as uuid } from "uuid";

export interface CardsSlice {
  cards: cardTypes[];
  setCards: (cardId: string, updatedCard: Partial<cardTypes>) => void;
  addCard: (listId: string) => void;
  deleteCard: (cardId: string) => void;
  isEditingCard: boolean;
  setIsEditingCard: (isEditing: boolean) => void;
  activeCardId?: string | undefined;
  setActiveCardId: (cardId: string | undefined) => void;
  moveCard: (cardId: string, newListId: string) => void;
}

export const createCardsSlice: StateCreator<CardsSlice> = (set) => ({
  cards: [],
  activeCardId: undefined,
  isEditingCard: false,
  setIsEditingCard: (isEditing) => set({ isEditingCard: isEditing }),
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
  setCards: (cardId, updatedCard) =>
    set((state) => ({
      cards: state.cards.map((card) => {
        if (card.cardId === cardId) {
          return { ...card, ...updatedCard };
        }
        return card;
      }),
    })),
  deleteCard: (cardId) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.cardId !== cardId),
    })),
  setActiveCardId: (cardId) => set({ activeCardId: cardId }),
  moveCard: (cardId: string, newListId: string) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.cardId === cardId ? { ...card, listId: newListId } : card,
      ),
    })),
});
