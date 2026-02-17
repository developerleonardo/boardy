import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBoundStore } from "@/stores";

interface EditBoardDialogProps {
  boardId?: string;
  isEditingBoard: boolean;
  setIsEditingBoard: (isEditing: boolean) => void;
}

export function EditBoardDialog({
  boardId,
  isEditingBoard,
  setIsEditingBoard,
}: EditBoardDialogProps) {
  const boards = useBoundStore((state) => state.boards);
  const updateBoard = useBoundStore((state) => state.updateBoard);
  const activeBoard = boards.find((board) => board.boardId === boardId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: {
      title: activeBoard?.title || "",
    },
  });
  if (!activeBoard || !boardId) return null;

  const onSubmit = handleSubmit((data) => {
    updateBoard({ ...activeBoard, ...data });
    reset();
    setIsEditingBoard(false);
  });

  return (
    <>
      <Dialog open={isEditingBoard} onOpenChange={setIsEditingBoard}>
        <DialogContent className="sm:max-w-sm">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <DialogHeader>
              <DialogTitle>Edit Board</DialogTitle>
              <DialogDescription>
                Make changes to your board here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title", { maxLength: 25 })} />
                {errors.title && (
                  <p className="text-red-300 text-sm mt-1">
                    {errors.title.type === "maxLength" &&
                      "Title cannot exceed 25 characters"}
                  </p>
                )}
              </Field>
            </FieldGroup>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
