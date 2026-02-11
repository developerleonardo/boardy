import { Button } from "@/components/ui/button";
import { CirclePlus, GripVertical, Trash } from "lucide-react";

type listProps = {
  title?: string;
  children?: React.ReactNode;
};

export const List = ({ title, children }: listProps) => {
  return (
    <div className="bg-neutral-800 rounded-md flex flex-col gap-3 w-76 p-4 items-center h-fit">
      <div className="flex justify-between items-center w-full">
        <input type="text" className="grow mr-2" value={title} />
        <Trash className="cursor-pointer w-5 h-5" />
        <GripVertical className="cursor-grab w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2">{children}</div>
      <Button variant="secondary" className="w-full hover:bg-neutral-900/50">
        <CirclePlus className="mr-1" />
        Add a new card
      </Button>
    </div>
  );
};
