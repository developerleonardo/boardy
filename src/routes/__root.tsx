import { BoardSidebar } from "@/components/BoardSidebar";
import { EditCardDialog } from "@/components/EditCardDialog";
import { Header } from "@/components/Header";
import { SearchDialog } from "@/components/SearchDialog";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useBoundStore } from "@/stores/bound/bound.store";

export const Route = createRootRoute({
  loader: () => {
    const store = useBoundStore.getState();
    if (!store.hasInitialized && store.boards.length === 0) {
      store.initializeIfNeeded();

      throw redirect({
        to: "/board/$boardId",
        params: { boardId: "1" },
      });
    }
    return null;
  },
  component: () => {
    const boards = useBoundStore((state) => state.boards);
    const activeBoardId = useBoundStore((state) => state.activeBoardId);
    let headerTitle =
      boards.length === 0
        ? ""
        : ` ${boards.find((b) => b.boardId === activeBoardId)?.title || ""}`;
    return (
      <>
        <Layout>
          <SidebarProvider>
            <BoardSidebar />
            <SidebarInset>
              <Header title={headerTitle} />
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
