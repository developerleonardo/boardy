import { Button } from "@/components/ui/button";

type listProps = {
  title?: string;
  children?: React.ReactNode;
};

export const List = ({ title, children }: listProps) => {
  return (
    <div className="bg-neutral-800 rounded-md flex flex-col gap-3 w-76 p-4 items-center h-fit">
      <div className="flex justify-between items-center w-full">
        <input type="text" className="grow mr-2" value={title} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trash-icon lucide-trash cursor-pointer"
        >
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grip-vertical-icon lucide-grip-vertical cursor-grab"
        >
          <circle cx="9" cy="12" r="1" />
          <circle cx="9" cy="5" r="1" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="15" cy="5" r="1" />
          <circle cx="15" cy="19" r="1" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
      <Button variant="secondary" className="w-full">
        Click me
      </Button>
    </div>
  );
};
