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

export const BoardSidebar = () => {
  return (
    <Sidebar side="left">
      <SidebarHeader>
        <div className="flex gap-2 items-center">
          <img src="./favicon.svg" alt="logo" className="w-4 h-4" />
          <h2 className="font-bold">Boardy</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Button variant="ghost" className="w-full flex justify-start">
              <SquarePen className="mr-1" />
              Add Board
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              <Search className="mr-1" />
              Search Board
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Boards</SidebarGroupLabel>
          <SidebarGroupContent>
            <Button variant="ghost" className="w-full flex justify-start">
              My first board
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
