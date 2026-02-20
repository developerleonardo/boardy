import type { listTypes } from "@/types";
import type { StateCreator } from "zustand";
import type { BoundState } from "../bound/bound.store";
import { v4 as uuid } from "uuid";

export interface ListsSlice {
  lists: listTypes[];
  addList: (boardId: string) => void;
  deleteList: (listId: string) => void;
  updateListTitle: (listId: string, title: string) => void;
  reorderLists: (startIndex: number, finishIndex: number) => void;
}

export const createListsSlice: StateCreator<BoundState, [], [], ListsSlice> = (
  set,
) => ({
  lists: [],
  addList: (boardId) =>
    set((state) => ({
      lists: [
        ...state.lists,
        {
          boardId: boardId,
          listId: uuid(),
          title: "New list",
          order: state.lists.filter((list) => list.boardId === boardId).length,
        },
      ],
    })),
  deleteList: (listId) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.listId !== listId),
      cards: state.cards.filter((card) => card.listId !== listId),
    })),
  updateListTitle: (listId, title) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.listId === listId ? { ...list, title } : list,
      ),
    })),
  reorderLists: (startIndex, finishIndex) =>
    set((state) => {
      const lists = [...state.lists].sort((a, b) => a.order - b.order);

      const [moved] = lists.splice(startIndex, 1);
      lists.splice(finishIndex, 0, moved);

      return {
        lists: lists.map((list, index) => ({
          ...list,
          order: index,
        })),
      };
    }),
});
