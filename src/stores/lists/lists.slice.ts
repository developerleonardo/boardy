import type { listTypes } from "@/types";
import type { StateCreator } from "zustand";

interface ListsSlice {
  lists: listTypes[];
  addList: (list: listTypes) => void;
}

export const createListsSlice: StateCreator<ListsSlice> = (set) => ({
  lists: [
    {
      boardId: "board-1",
      listId: "list-1",
      title: "To Do",
    },
    {
      boardId: "board-1",
      listId: "list-2",
      title: "In Progress",
    },
  ],
  addList: (list) => set((state) => ({ lists: [...state.lists, list] })),
});
