import { useState } from "react";
import { Card } from "./components/Card";
import { List } from "@/components/List";
import { Layout } from "./components/Layout";
import { BoardSidebar } from "./components/BoardSidebar";
import { Header } from "./components/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cardTemplates } from "@/mocks/cardTemplates.mock";
import { type cardTypes } from "@/types";
import "./App.css";
import { Button } from "./components/ui/button";
import { CirclePlus } from "lucide-react";

function App() {
  const [cards, setCards] = useState<cardTypes[]>(cardTemplates);

  return (
    <>
      <Layout>
        <Header />
        <SidebarProvider>
          <BoardSidebar />
          <SidebarTrigger />
          <SidebarInset>
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
          </SidebarInset>
        </SidebarProvider>
      </Layout>
    </>
  );
}

export default App;
