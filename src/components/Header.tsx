import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full bg-neutral-900 grid grid-cols-[1fr_1fr_auto] p-2 items-center">
      <div></div>
      <h1 className="text-xl">{title}</h1>
      <Button>Login</Button>
    </header>
  );
};
