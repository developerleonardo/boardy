import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-neutral-900 grid grid-cols-[1fr_1fr_auto] p-2 items-center">
      <div></div>
      <h1 className="text-xl">My First Board</h1>
      <Button>Login</Button>
    </header>
  );
};
