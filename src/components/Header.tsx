import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "./ui/sidebar";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full bg-neutral-900 grid grid-cols-[1fr_1fr_auto] p-2 items-center justify-center">
      <SidebarTrigger />
      <h1 className="text-xl">{title}</h1>
      <Button>Login</Button>
    </header>
  );
};
