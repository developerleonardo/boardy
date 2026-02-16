import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Search, SquarePen } from "lucide-react";
import { useBoundStore } from "@/stores";
import { v4 as uuid } from "uuid";

export const BoardSidebar = () => {
  const boards = useBoundStore((state) => state.boards);
  const addBoard = useBoundStore((state) => state.addBoard);
  const setActiveBoardId = useBoundStore((state) => state.setActiveBoardId);
  const setIsSearchDialogOpen = useBoundStore(
    (state) => state.setIsSearchDialogOpen,
  );

  const handleAddBoard = () => {
    const newBoard = {
      boardId: uuid(),
      userId: "local-user",
      title: `New Board`,
    };
    addBoard(newBoard);
    setActiveBoardId(newBoard.boardId);
  };

  const handleSelectBoard = (boardId: string) => {
    setActiveBoardId(boardId);
  };

  return (
    <Sidebar side="left">
      <SidebarHeader>
        <div className="flex gap-2 items-center px-3 py-2">
          <img src="./favicon.svg" alt="logo" className="w-4 h-4" />
          <h2 className="font-bold">Boardy</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Button
              variant="ghost"
              className="w-full flex justify-start"
              onClick={handleAddBoard}
            >
              <SquarePen className="mr-1" />
              Add Board
            </Button>
            <Button
              variant="ghost"
              className="w-full flex justify-start"
              onClick={() => setIsSearchDialogOpen(true)}
            >
              <Search className="mr-1" />
              Search Board
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Boards</SidebarGroupLabel>
          <SidebarGroupContent>
            {boards.map((board) => (
              <Button
                variant="ghost"
                className="w-full flex justify-start"
                key={board.boardId}
                onClick={() => handleSelectBoard(board.boardId)}
              >
                {board.title}
              </Button>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
