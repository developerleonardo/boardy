import { Button } from "@/components/ui/button";
import { useBoundStore } from "@/stores";
import { CirclePlus, GripVertical, Trash } from "lucide-react";
import { AlertDialogDestructive } from "./AlertDialog";
import { useEffect, useRef, useState } from "react";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import { attachClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";

type listProps = {
  boardId: string;
  listId: string;
  title: string;
  children?: React.ReactNode;
  order: number;
};

export const List = ({
  listId,
  title = "New List",
  children,
  order,
}: listProps) => {
  const updateListTitle = useBoundStore((state) => state.updateListTitle);
  const deleteList = useBoundStore((state) => state.deleteList);
  const addCard = useBoundStore((state) => state.addCard);
  const [isDialogActive, setIsDialogActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return draggable({
      element: el,
      getInitialData: () => ({
        type: "list",
        listId,
        order,
      }),
    });
  }, [listId, order]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return dropTargetForElements({
      element: el,
      getData: ({ input, element }) =>
        attachClosestEdge(
          {
            type: "list",
            listId,
            order,
          },
          {
            input,
            element,
            allowedEdges: ["left", "right"],
          },
        ),
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, [listId, order]);

  const openAlertDialog = () => {
    setIsDialogActive(true);
  };
  const confirmDeleteList = () => {
    deleteList(listId);
    setIsDialogActive(false);
  };
  return (
    <>
      <div
        ref={ref}
        className={`bg-neutral-800 rounded-md flex flex-col gap-3 w-76 p-4 items-center h-fit ${isDraggedOver ? "bg-neutral-900" : "bg-neutral-800"}`}
      >
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
