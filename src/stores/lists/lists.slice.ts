import type { listTypes } from "@/types";
import type { StateCreator } from "zustand";

interface ListsSlice {
  lists: listTypes[];
  addList: (list: listTypes) => void;
}

export const createListsSlice: StateCreator<ListsSlice> = (set) => ({
  lists: [],
  addList: (list) => set((state) => ({ lists: [...state.lists, list] })),
});
