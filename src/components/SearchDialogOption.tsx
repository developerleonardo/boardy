import { Button } from "./ui/button";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlertDialogDestructive } from "@/components/AlertDialog";
import { useBoundStore } from "@/stores";
import { useState } from "react";

interface SearchDialogOptionProps {
  title: string;
  boardId?: string;
}

export const SearchDialogOption = ({
  title,
  boardId,
}: SearchDialogOptionProps) => {
  const deleteBoard = useBoundStore((state) => state.deleteBoard);
  const setIsSearchDialogOpen = useBoundStore(
    (state) => state.setIsSearchDialogOpen,
  );
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const handleOpenDeleteDialog = () => {
    setIsAlertDialogOpen(true);
  };

  const confirmDeleteBoard = () => {
    if (!boardId) return;
    deleteBoard(boardId);
    setIsAlertDialogOpen(false);
    setIsSearchDialogOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <a href={`/board/${boardId}`} className="flex-1 text-left px-2 py-1">
          {title}
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <SquarePen />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={handleOpenDeleteDialog}
            >
              <Trash />
              Delete Board
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AlertDialogDestructive
        title="Delete board?"
        description="This will permanently delete this board"
        onConfirm={confirmDeleteBoard}
        isAlertDialogOpen={isAlertDialogOpen}
        setIsAlertDialogOpen={setIsAlertDialogOpen}
      />
    </>
  );
};
