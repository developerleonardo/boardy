import type { listTypes } from "@/types";
import { List } from "./List";

type ActiveBoardProps = {
  lists: listTypes[];
};

export const ActiveBoard = ({ lists }: ActiveBoardProps) => {
  return <div>Active Board</div>;
};
