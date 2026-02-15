import { useBoundStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/Card";
import { List } from "@/components/List";

type ActiveBoardProps = {
  userId: string;
  boardId: string;
  title: string;
};

export const ActiveBoard = ({ userId, boardId, title }: ActiveBoardProps) => {
  const cards = useBoundStore((state) => state.cards);
  const lists = useBoundStore((state) => state.lists);
  const addList = useBoundStore((state) => state.addList);

  const filteredLists = lists.filter((list) => list.boardId === boardId);

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex gap-8 pt-12 px-4 overflow-x-auto">
      {filteredLists.map((list) => {
        return (
          <List
            key={list.listId}
            listId={list.listId}
            boardId={list.boardId}
            title={list.title}
          >
            {cards
              .filter((card) => card.listId === list.listId)
              .map((cardFiltered) => {
                return (
                  <Card
                    key={cardFiltered.cardId}
                    listId={cardFiltered.listId}
                    cardId={cardFiltered.cardId}
                    title={cardFiltered.title}
                    description={cardFiltered.description}
                    priority={cardFiltered.priority || "low"}
                  />
                );
              })}
          </List>
        );
      })}

      <Button
        variant="secondary"
        className="w-76"
        onClick={() => addList(boardId)}
      >
        <CirclePlus className="mr-1" />
        Add a new list
      </Button>
    </div>
  );
};
