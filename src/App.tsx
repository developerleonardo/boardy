import { Layout } from "./components/Layout";
import { BoardSidebar } from "./components/BoardSidebar";
import { Header } from "./components/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "./App.css";
import { ActiveBoard } from "./components/ActiveBoard";
import { EditCardDialog } from "./components/EditCardDialog";
import { useBoundStore } from "./stores";

function App() {
  const boards = useBoundStore((state) => state.boards);
  const selectedBoardId = useBoundStore((state) => state.activeBoardId);

  const activeBoard = boards.find((board) => board.boardId === selectedBoardId);

  return (
    <>
      <Layout>
        <Header title={activeBoard?.title || "My First Board"} />
        <SidebarProvider>
          <BoardSidebar />
          <SidebarTrigger />
          <SidebarInset>
            <ActiveBoard
              userId={activeBoard?.userId || "local-user"}
              boardId={activeBoard?.boardId || "1"}
              title={activeBoard?.title || "My First Board"}
            />
          </SidebarInset>
        </SidebarProvider>
        <EditCardDialog />
      </Layout>
    </>
  );
}

export default App;
