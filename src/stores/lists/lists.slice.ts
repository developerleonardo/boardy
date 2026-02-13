import type { listTypes } from "@/types";
import type { StateCreator } from "zustand";
import type { BoundState } from "../bound/bound.store";
import { v4 as uuid } from "uuid";

export interface ListsSlice {
  lists: listTypes[];
  addList: (boardId: string) => void;
  deleteList: (listId: string) => void;
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
        },
      ],
    })),
  deleteList: (listId) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.listId !== listId),
      cards: state.cards.filter((card) => card.listId !== listId),
    })),
});
