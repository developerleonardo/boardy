import { useForm, Controller } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Trash } from "lucide-react";
import { AlertDialogDestructive } from "./AlertDialog";
import { useState } from "react";

interface EditCardDialogProps {}

export function EditCardDialog({}: EditCardDialogProps) {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);

  const cards = useBoundStore((state) => state.cards);
  const setCards = useBoundStore((state) => state.setCards);
  const cardId = useBoundStore((state) => state.activeCardId);
  const isEditingCard = useBoundStore((state) => state.isEditingCard);
  const setIsEditingCard = useBoundStore((state) => state.setIsEditingCard);
  const deleteCard = useBoundStore((state) => state.deleteCard);
  const activeCard = cards.find((card) => card.cardId === cardId);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    values: {
      title: activeCard?.title || "",
      description: activeCard?.description || "",
      priority: activeCard?.priority || "low",
    },
  });
  if (!activeCard || !cardId) return null;

  const openAlertDialog = () => {
    setIsAlertDialogOpen(true);
  };

  const confirmDeleteCard = () => {
    deleteCard(cardId);
    setIsAlertDialogOpen(false);
    setIsEditingCard(false);
  };

  const onSubmit = handleSubmit((data) => {
    setCards(cardId, data);
    reset();
    setIsEditingCard(false);
  });

  return (
    <>
      <Dialog open={isEditingCard} onOpenChange={setIsEditingCard}>
        <DialogContent className="sm:max-w-sm">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <DialogHeader>
              <DialogTitle>Edit Card</DialogTitle>
              <DialogDescription>
                Make changes to your tasks here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  defaultValue={activeCard.title || ""}
                  {...register("title", { maxLength: 25 })}
                />
                {errors.title && (
                  <p className="text-red-300 text-sm mt-1">
                    {errors.title.type === "maxLength" &&
                      "Title cannot exceed 25 characters"}
                  </p>
                )}
              </Field>
              <Field>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Type your message here."
                  defaultValue={activeCard.description || ""}
                  {...register("description", { maxLength: 500 })}
                />
                {errors.description && (
                  <p className="text-red-300 text-sm mt-1">
                    {errors.description.type === "maxLength" &&
                      "Description cannot exceed 500 characters"}
                  </p>
                )}
              </Field>
              <Field>
                <Label htmlFor="priority">Priority</Label>

                <Controller
                  name="priority"
                  control={control}
                  defaultValue={activeCard.priority}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select the priority level</SelectLabel>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <Button
                variant="destructive"
                type="button"
                onClick={openAlertDialog}
              >
                <Trash className="inline w-3 h-3" />
                Delete
              </Button>
              <div>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <AlertDialogDestructive
        title="Delete card?"
        description="This will permanently delete this card."
        onConfirm={confirmDeleteCard}
        isAlertDialogOpen={isAlertDialogOpen}
        setIsAlertDialogOpen={setIsAlertDialogOpen}
      />
    </>
  );
}
