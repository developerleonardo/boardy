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
  reorderWithinList: (cardId: string, listId: string, toOrder: number) => void;
  moveBetweenLists: (
    cardId: string,
    sourceListId: string,
    destinationListId: string,
    destinationOrder: number,
  ) => void;
  moveCardToEnd: (cardId: string, destinationListId: string) => void;
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
          order: state.cards.filter((card) => card.listId === listId).length,
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
  reorderWithinList: (cardId: string, listId: string, toOrder: number) =>
    set((state) => {
      const cards = [...state.cards];

      const listCards = cards
        .filter((c) => c.listId === listId)
        .sort((a, b) => a.order - b.order);

      const movingCard = listCards.find((c) => c.cardId === cardId);
      if (!movingCard) return state;

      const remaining = listCards.filter((c) => c.cardId !== cardId);

      remaining.splice(toOrder, 0, movingCard);

      const updated = remaining.map((card, index) => ({
        ...card,
        order: index,
      }));

      return {
        cards: cards.map((c) =>
          c.listId === listId
            ? (updated.find((u) => u.cardId === c.cardId) ?? c)
            : c,
        ),
      };
    }),
  moveBetweenLists: (
    cardId: string,
    sourceListId: string,
    destinationListId: string,
    destinationOrder: number,
  ) =>
    set((state) => {
      const cards = [...state.cards];

      const sourceCards = cards
        .filter((c) => c.listId === sourceListId)
        .sort((a, b) => a.order - b.order);

      const destinationCards = cards
        .filter((c) => c.listId === destinationListId)
        .sort((a, b) => a.order - b.order);

      const movingCard = sourceCards.find((c) => c.cardId === cardId);
      if (!movingCard) return state;

      const newSource = sourceCards
        .filter((c) => c.cardId !== cardId)
        .map((card, index) => ({
          ...card,
          order: index,
        }));

      const newDestination = [
        ...destinationCards.slice(0, destinationOrder),
        { ...movingCard, listId: destinationListId },
        ...destinationCards.slice(destinationOrder),
      ].map((card, index) => ({
        ...card,
        order: index,
      }));

      return {
        cards: cards
          .filter(
            (c) => c.listId !== sourceListId && c.listId !== destinationListId,
          )
          .concat(newSource)
          .concat(newDestination),
      };
    }),
  moveCardToEnd: (cardId: string, destinationListId: string) =>
    set((state) => {
      const cards = [...state.cards];

      const movingCard = cards.find((c) => c.cardId === cardId);
      if (!movingCard) return state;

      const destinationCards = cards
        .filter((c) => c.listId === destinationListId)
        .sort((a, b) => a.order - b.order);

      const updatedDestination = [
        ...destinationCards,
        { ...movingCard, listId: destinationListId },
      ].map((card, index) => ({
        ...card,
        order: index,
      }));

      return {
        cards: cards
          .filter((c) => c.cardId !== cardId)
          .filter((c) => c.listId !== destinationListId)
          .concat(updatedDestination),
      };
    }),
});
