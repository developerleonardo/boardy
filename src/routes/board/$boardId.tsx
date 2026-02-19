import { useBoundStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/Card";
import { List } from "@/components/List";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

export const Route = createFileRoute("/board/$boardId")({
  loader: ({ params }) => params.boardId,
  component: Board,
});

function Board() {
  const cards = useBoundStore((state) => state.cards);
  const lists = useBoundStore((state) => state.lists);
  const addList = useBoundStore((state) => state.addList);
  const moveCard = useBoundStore((state) => state.moveCard);

  const { boardId } = Route.useParams();

  const filteredLists = lists.filter((list) => list.boardId === boardId);

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) return;

        const sourceData = source.data;
        const destinationData = destination.data;

        if (sourceData?.type !== "card" || destinationData?.type !== "list") {
          return;
        }

        const { cardId } = sourceData as { cardId: string };
        const { listId } = destinationData as { listId: string };

        moveCard(cardId, listId);
      },
    });
  }, [moveCard]);

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
}
