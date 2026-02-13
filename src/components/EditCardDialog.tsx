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

interface EditCardDialogProps {}

export function EditCardDialog({}: EditCardDialogProps) {
  const isEditingCard = useBoundStore((state) => state.isEditingCard);
  const setIsEditingCard = useBoundStore((state) => state.setIsEditingCard);

  return (
    <Dialog open={isEditingCard} onOpenChange={setIsEditingCard}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Card</DialogTitle>
            <DialogDescription>
              Make changes to your tasks here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Textarea id="username-1" placeholder="Type your message here." />
            </Field>
            <Field>
              <Label htmlFor="priority-1">Priority</Label>
              <Select>
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
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button variant="destructive">
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
        </DialogContent>
      </form>
    </Dialog>
  );
}
