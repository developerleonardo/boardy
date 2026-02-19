import { EmptyBoardsState } from "@/components/EmptyBoardsState";
import { useBoundStore } from "@/stores";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const { boards } = useBoundStore.getState();
    if (boards.length === 0) {
      throw redirect({
        to: "/board/$boardId",
        params: { boardId: boards[0].boardId },
      });
    }
  },
  component: EmptyBoardsState,
});
