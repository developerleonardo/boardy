export interface userTypes {
  userId: string;
  name: string;
  email: string;
}

export interface boardTypes {
  boardId: string;
  userId: string;
  title: string;
}

export interface cardTypes {
  listId: string;
  cardId: number;
  title: string;
  description: string;
  priority?: priorityType;
}

export type priorityType = "low" | "medium" | "high";

export interface listTypes {
  boardId: string;
  listId: string;
  title: string;
}
