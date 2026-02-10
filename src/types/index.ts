export interface cardTypes {
  cardId: number;
  title: string;
  description: string;
  priority?: priorityType;
}

export type priorityType = "low" | "medium" | "high";

export interface listTypes {
  listId: number;
  title: string;
  cards: cardTypes[];
}
