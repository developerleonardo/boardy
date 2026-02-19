import { BoardSidebar } from "@/components/BoardSidebar";
import { EditCardDialog } from "@/components/EditCardDialog";
import { Header } from "@/components/Header";
import { SearchDialog } from "@/components/SearchDialog";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useBoundStore } from "@/stores/bound/bound.store";

export const Route = createRootRoute({
  component: () => {
    const boards = useBoundStore((state) => state.boards);
    const selectedBoardId = useBoundStore((state) => state.activeBoardId);

    const activeBoard = boards.find(
      (board) => board.boardId === selectedBoardId,
    );
    return (
      <>
        <Layout>
          <Header title={activeBoard?.title || "My first Board"} />
          <SidebarProvider>
            <BoardSidebar />
            <SidebarTrigger />
            <SidebarInset>
              <Outlet />
            </SidebarInset>
          </SidebarProvider>
          <EditCardDialog />
          <SearchDialog />
        </Layout>
        <TanStackRouterDevtools />
      </>
    );
  },
});
