import { useBoundStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/Card";
import { List } from "@/components/List";

type ActiveBoardProps = {};

export const ActiveBoard = ({}: ActiveBoardProps) => {
  const cards = useBoundStore((state) => state.cards);

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex gap-8 pt-12 px-4 overflow-x-auto">
      <List>
        {cards.map((cardTemplate) => {
          return (
            <Card
              key={cardTemplate.cardId}
              cardId={cardTemplate.cardId}
              title={cardTemplate.title}
              description={cardTemplate.description}
              priority={cardTemplate.priority || "low"}
            />
          );
        })}
      </List>
      <List>
        {cards.map((cardTemplate) => {
          return (
            <Card
              key={cardTemplate.cardId}
              cardId={cardTemplate.cardId}
              title={cardTemplate.title}
              description={cardTemplate.description}
              priority={cardTemplate.priority || "low"}
            />
          );
        })}
      </List>
      <List>
        {cards.map((cardTemplate) => {
          return (
            <Card
              key={cardTemplate.cardId}
              cardId={cardTemplate.cardId}
              title={cardTemplate.title}
              description={cardTemplate.description}
              priority={cardTemplate.priority || "low"}
            />
          );
        })}
      </List>
      <Button variant="secondary" className="w-76">
        <CirclePlus className="mr-1" />
        Add a new list
      </Button>
    </div>
  );
};
