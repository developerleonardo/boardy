import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { SearchDialogOption } from "./SearchDialogOption";
import { useBoundStore } from "@/stores";
import { useState } from "react";

interface SearchDialogProps {}

export function SearchDialog({}: SearchDialogProps) {
  const boards = useBoundStore((state) => state.boards);
  const isSearchDialogOpen = useBoundStore((state) => state.isSearchDialogOpen);
  const setIsSearchDialogOpen = useBoundStore(
    (state) => state.setIsSearchDialogOpen,
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBoards = boards.filter((board) =>
    board.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const resetInput = () => {
    setSearchTerm("");
  };

  return (
    <>
      <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <FieldGroup>
            <Field className="mt-4 w-full">
              <InputGroup className="w-full">
                <InputGroupInput
                  id="name-1"
                  name="name-1"
                  placeholder="Search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  {filteredBoards.length} results
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
          <div className="flex flex-col">
            <DialogTitle className="text-sm text-neutral-400">
              Recent Boards
            </DialogTitle>
            <div className="flex flex-col mt-2 h-64 overflow-y-auto">
              {filteredBoards.map((board) => (
                <SearchDialogOption
                  key={board.boardId}
                  title={board.title}
                  boardId={board.boardId}
                  resetInput={resetInput}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
