import { create } from "zustand";
//import { persist } from "zustand/middleware";
import { createBoardsSlice } from "../boards/boards.slice";
import { createCardsSlice } from "../cards/cards.slice";
import { createListsSlice } from "../lists/lists.slice";
//import type { StateCreator } from "zustand";

type BoundState = ReturnType<typeof createBoardsSlice> &
  ReturnType<typeof createListsSlice> &
  ReturnType<typeof createCardsSlice>;

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
