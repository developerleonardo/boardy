import { Badge } from "./ui/badge";
import { type cardTypes } from "@/types";
import { useBoundStore } from "@/stores";
import { useEffect, useRef, useState } from "react";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

type cardProps = cardTypes;

export const Card: React.FC<cardProps> = ({
  title,
  description,
  priority,
  listId,
  cardId,
  order,
}: cardProps) => {
  const setActiveCardId = useBoundStore((state) => state.setActiveCardId);
  let badgeVariant;
  if (priority === "low" || priority === "medium" || priority === "high") {
    badgeVariant = priority;
  }
  const setIsEditingCard = useBoundStore((state) => state.setIsEditingCard);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleCardClick = () => {
    setActiveCardId(cardId);
    setIsEditingCard(true);
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return draggable({
      element: el,
      getInitialData: () => ({
        type: "card",
        cardId,
        listId,
        order,
      }),
      onDragStart: () => setDragging(true),
      onDrop: () => setDragging(false),
    });
  }, [cardId, listId]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return dropTargetForElements({
      element: el,
      getData: () => ({
        type: "card",
        cardId,
        listId,
        order,
      }),
    });
  }, [cardId, listId, order]);

  return (
    <div
      ref={ref}
      className={`bg-neutral-700 h-44 rounded-lg px-6 py-4 w-full max-w-70 grid grid-rows-[1fr_2fr_22px] hover:bg-neutral-600 cursor-pointer ${dragging ? "opacity-50" : ""}`}
      onClick={handleCardClick}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base overflow-y-hidden max-w-56">{description}</p>
      <Badge variant={badgeVariant}>{priority}</Badge>
    </div>
  );
};
