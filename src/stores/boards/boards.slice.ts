import { type boardTypes } from "@/types/index";
import type { StateCreator } from "zustand";

export interface BoardsSlice {
  boards: boardTypes[];
  addBoard: (board: boardTypes) => void;
}

export const createBoardsSlice: StateCreator<BoardsSlice> = (set) => ({
  boards: [],
  addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),
});
