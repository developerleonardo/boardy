import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { SearchDialogOption } from "./SearchDialogOption";
import { useBoundStore } from "@/stores";

interface SearchDialogProps {}

export function SearchDialog({}: SearchDialogProps) {
  const boards = useBoundStore((state) => state.boards);
  const isSearchDialogOpen = useBoundStore((state) => state.isSearchDialogOpen);
  const setIsSearchDialogOpen = useBoundStore(
    (state) => state.setIsSearchDialogOpen,
  );

  return (
    <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <FieldGroup>
            <Field className="mt-4 w-full">
              <InputGroup className="w-full">
                <InputGroupInput
                  id="name-1"
                  name="name-1"
                  placeholder="Search..."
                />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
          <div className="flex flex-col">
            <DialogTitle className="text-sm text-neutral-400">
              Recent Boards
            </DialogTitle>
            <div className="flex flex-col mt-2">
              {boards.map((board) => (
                <SearchDialogOption
                  key={board.boardId}
                  title={board.title}
                  boardId={board.boardId}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
