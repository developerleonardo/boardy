import { Button } from "./ui/button";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchDialogOptionProps {
  title: string;
  boardId?: string;
}

export const SearchDialogOption = ({
  title,
  boardId,
}: SearchDialogOptionProps) => {
  return (
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
          <DropdownMenuItem variant="destructive">
            <Trash />
            Delete Board
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
