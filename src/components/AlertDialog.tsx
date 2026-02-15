import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useBoundStore } from "@/stores";
import { Trash2Icon } from "lucide-react";

interface AlertDialogDestructiveProps {
  title: string;
  description: string;
  onConfirm?: () => void;
}

export const AlertDialogDestructive = ({
  title,
  description,
  onConfirm,
}: AlertDialogDestructiveProps) => {
  const isAlertDialogOpen = useBoundStore((state) => state.isAlertDialogOpen);
  const setIsAlertDialogOpen = useBoundStore(
    (state) => state.setIsAlertDialogOpen,
  );

  return (
    <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onConfirm}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
