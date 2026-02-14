import { Badge } from "./ui/badge";
import { type cardTypes } from "@/types";
import { useBoundStore } from "@/stores";

type cardProps = cardTypes;

export const Card: React.FC<cardProps> = ({
  title,
  description,
  priority,
  cardId,
}: cardProps) => {
  const setActiveCardId = useBoundStore((state) => state.setActiveCardId);
  let badgeVariant;
  if (priority === "low" || priority === "medium" || priority === "high") {
    badgeVariant = priority;
  }
  const setIsEditingCard = useBoundStore((state) => state.setIsEditingCard);

  const handleCardClick = () => {
    setActiveCardId(cardId);
    setIsEditingCard(true);
  };

  return (
    <div
      className="bg-neutral-700 h-44 rounded-lg px-6 py-4 w-full max-w-70 grid grid-rows-[1fr_2fr_22px] hover:bg-neutral-600 cursor-pointer"
      onClick={handleCardClick}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base">{description}</p>
      <Badge variant={badgeVariant}>{priority}</Badge>
    </div>
  );
};
