import { create } from "zustand";
//import { persist } from "zustand/middleware";
import { createBoardsSlice } from "../boards/boards.slice";
import { createCardsSlice } from "../cards/cards.slice";
import { createListsSlice } from "../lists/lists.slice";
//import type { StateCreator } from "zustand";
import type { BoardsSlice } from "../boards/boards.slice";
import type { ListsSlice } from "../lists/lists.slice";
import type { CardsSlice } from "../cards/cards.slice";

export type BoundState = BoardsSlice & ListsSlice & CardsSlice;

export const useBoundStore = create<BoundState>((...args) => ({
  ...createBoardsSlice(...args),
  ...createListsSlice(...args),
  ...createCardsSlice(...args),
}));

// const createBoundStore: StateCreator<BoundState> = (...args) => ({
//   ...createBoardsSlice(...args),
//   ...createListsSlice(...args),
//   ...createCardsSlice(...args),
// });
// export const useBoundStore = create(
//   persist(createBoundStore, { name: "boardy-storage" }),
// );
