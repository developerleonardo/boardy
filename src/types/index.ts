export interface cardTypes {
  title: string;
  description: string;
  priority: priorityType;
}

export type priorityType = "low" | "medium" | "high";
