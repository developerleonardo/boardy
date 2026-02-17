import { type boardTypes } from "@/types/index";
import type { StateCreator } from "zustand";

export interface BoardsSlice {
  boards: boardTypes[];
  addBoard: (board: boardTypes) => void;
  activeBoardId?: string;
  setActiveBoardId: (boardId: string) => void;
  isSearchDialogOpen: boolean;
  setIsSearchDialogOpen: (isOpen: boolean) => void;
  deleteBoard: (boardId: string) => void;
  updateBoard: (board: boardTypes) => void;
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
  updateBoard: (board) =>
    set((state) => ({
      boards: state.boards.map((b) =>
        b.boardId === board.boardId ? board : b,
      ),
    })),
  setActiveBoardId: (boardId) => set({ activeBoardId: boardId }),
  isSearchDialogOpen: false,
  setIsSearchDialogOpen: (isOpen) => set({ isSearchDialogOpen: isOpen }),
  deleteBoard: (boardId) =>
    set((state) => ({
      boards: state.boards.filter((board) => board.boardId !== boardId),
    })),
});
