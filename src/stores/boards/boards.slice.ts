import { type boardTypes } from "@/types/index";
import type { StateCreator } from "zustand";

export interface BoardsSlice {
  boards: boardTypes[];
  addBoard: (board: boardTypes) => void;
  activeBoardId?: string;
  setActiveBoardId: (boardId: string) => void;
}

export const createBoardsSlice: StateCreator<BoardsSlice> = (set) => ({
  activeBoardId: "1",
  boards: [
    {
      boardId: "1",
      userId: "local-user",
      title: "My First Board",
    },
  ],
  addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),
  setActiveBoardId: (boardId) => set({ activeBoardId: boardId }),
});
