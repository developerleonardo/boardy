import { useBoundStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/Card";
import { List } from "@/components/List";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index";

export const Route = createFileRoute("/board/$boardId")({
  loader: ({ params }) => params.boardId,
  component: Board,
});

function Board() {
  const cards = useBoundStore((state) => state.cards);
  const lists = useBoundStore((state) => state.lists);
  const reorderLists = useBoundStore((state) => state.reorderLists);
  const addList = useBoundStore((state) => state.addList);
  const reorderWithinList = useBoundStore((state) => state.reorderWithinList);
  const moveBetweenLists = useBoundStore((state) => state.moveBetweenLists);
  const moveCardToEnd = useBoundStore((state) => state.moveCardToEnd);

  const { boardId } = Route.useParams();

  const filteredLists = lists.filter((list) => list.boardId === boardId);

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const dropTargets = location.current.dropTargets;
        if (!dropTargets.length) return;

        if (source.data?.type === "list") {
          const destination = dropTargets[0];
          if (destination.data?.type !== "list") return;

          const orderedLists = lists
            .filter((l) => l.boardId === boardId)
            .sort((a, b) => a.order - b.order);

          const startIndex = orderedLists.findIndex(
            (l) => l.listId === source.data.listId,
          );

          const indexOfTarget = orderedLists.findIndex(
            (l) => l.listId === destination.data.listId,
          );

          if (startIndex === -1 || indexOfTarget === -1) return;

          const closestEdge = extractClosestEdge(destination.data);

          let finishIndex = getReorderDestinationIndex({
            startIndex,
            indexOfTarget,
            closestEdgeOfTarget: closestEdge,
            axis: "horizontal",
          });
          if (startIndex > indexOfTarget && closestEdge === "right") {
            finishIndex = indexOfTarget;
          }

          reorderLists(startIndex, finishIndex);
          return;
        }

        if (source.data?.type !== "card") return;

        const { cardId, listId: sourceListId } = source.data;

        const orderedCards = cards
          .filter((c) => c.listId === sourceListId)
          .sort((a, b) => a.order - b.order);

        const startIndex = orderedCards.findIndex((c) => c.cardId === cardId);

        if (dropTargets.length === 2) {
          const [destinationCard, destinationList] = dropTargets;

          if (destinationCard.data?.type !== "card") return;

          const destinationListId = destinationList.data.listId;

          const destinationCards = cards
            .filter((c) => c.listId === destinationListId)
            .sort((a, b) => a.order - b.order);

          const indexOfTarget = destinationCards.findIndex(
            (c) => c.cardId === destinationCard.data.cardId,
          );

          if (startIndex === -1 || indexOfTarget === -1) return;

          const closestEdge = extractClosestEdge(destinationCard.data);

          const finishIndex = getReorderDestinationIndex({
            startIndex,
            indexOfTarget,
            closestEdgeOfTarget: closestEdge,
            axis: "vertical",
          });

          if (sourceListId === destinationListId) {
            reorderWithinList(
              cardId as string,
              sourceListId as string,
              finishIndex,
            );
          } else {
            moveBetweenLists(
              cardId as string,
              sourceListId as string,
              destinationListId as string,
              finishIndex,
            );
          }

          return;
        }

        if (dropTargets.length === 1) {
          const [destinationList] = dropTargets;
          if (destinationList.data?.type !== "list") return;

          moveCardToEnd(
            cardId as string,
            destinationList.data.listId as string,
          );
        }
      },
    });
  }, [
    lists,
    cards,
    boardId,
    reorderLists,
    reorderWithinList,
    moveBetweenLists,
    moveCardToEnd,
  ]);
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex gap-8 pt-12 px-12 overflow-x-auto">
      {filteredLists
        .sort((a, b) => a.order - b.order)
        .map((list) => {
          return (
            <List
              key={list.listId}
              listId={list.listId}
              boardId={list.boardId}
              title={list.title}
              order={list.order}
            >
              {cards
                .filter((card) => card.listId === list.listId)
                .sort((a, b) => a.order - b.order)
                .map((cardFiltered) => {
                  return (
                    <Card
                      key={cardFiltered.cardId}
                      listId={cardFiltered.listId}
                      cardId={cardFiltered.cardId}
                      title={cardFiltered.title}
                      description={cardFiltered.description}
                      priority={cardFiltered.priority || "low"}
                      order={cardFiltered.order}
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
