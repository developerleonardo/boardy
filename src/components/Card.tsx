import { Badge } from "./ui/badge";
import { type cardTypes } from "@/types";

type cardProps = cardTypes;

export const Card: React.FC<cardProps> = ({
  title,
  description,
  priority,
}: cardProps) => {
  let badgeVariant;
  if (priority === "low" || priority === "medium" || priority === "high") {
    badgeVariant = priority;
  }
  return (
    <div className="bg-neutral-700 h-44 rounded-lg px-6 py-4 w-full max-w-70 grid grid-rows-[1fr_2fr_22px]">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base">{description}</p>
      <Badge variant={badgeVariant}>{priority}</Badge>
    </div>
  );
};
