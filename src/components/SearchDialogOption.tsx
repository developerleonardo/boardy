import { Button } from "./ui/button";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

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
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
