import { Button } from "@/components/ui/button";
import { useBoundStore } from "@/stores";
import { CirclePlus, GripVertical, Trash } from "lucide-react";
import { AlertDialogDestructive } from "./AlertDialog";
import { useState } from "react";

type listProps = {
  boardId: string;
  listId: string;
  title: string;
  children?: React.ReactNode;
};

export const List = ({ listId, title = "New List", children }: listProps) => {
  const [isDialogActive, setIsDialogActive] = useState<boolean>(false);

  const updateListTitle = useBoundStore((state) => state.updateListTitle);
  const deleteList = useBoundStore((state) => state.deleteList);
  const addCard = useBoundStore((state) => state.addCard);
  const openAlertDialog = () => {
    setIsDialogActive(true);
  };
  const confirmDeleteList = () => {
    deleteList(listId);
    setIsDialogActive(false);
  };
  return (
    <>
      <div className="bg-neutral-800 rounded-md flex flex-col gap-3 w-76 p-4 items-center h-fit">
        <div className="flex justify-between items-center w-full">
          <input
            type="text"
            className="grow mr-2"
            value={title}
            onChange={(e) => updateListTitle(listId, e.target.value)}
          />
          <Trash className="cursor-pointer w-5 h-5" onClick={openAlertDialog} />
          <GripVertical className="cursor-grab w-5 h-5" />
        </div>
        <div className="flex flex-col gap-2 w-full">{children}</div>
        <Button
          variant="secondary"
          className="w-full hover:bg-neutral-900/50"
          onClick={() => addCard(listId)}
        >
          <CirclePlus className="mr-1" />
          Add a new card
        </Button>
      </div>
      <AlertDialogDestructive
        title="Delete list?"
        description="This will permanently delete this list and all its cards."
        onConfirm={confirmDeleteList}
        isAlertDialogOpen={isDialogActive}
        setIsAlertDialogOpen={setIsDialogActive}
      />
    </>
  );
};
