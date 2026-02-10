import { Card } from "./components/Card";
import { cardTemplates } from "@/mocks/cardTemplates.mock";
import { type cardTypes } from "@/types";
import "./App.css";
import { List } from "@/components/List";
import { useState } from "react";
import { Layout } from "./components/Layout";

function App() {
  const [cards, setCards] = useState<cardTypes[]>(cardTemplates);

  return (
    <>
      <Layout>
        <header className="w-full bg-neutral-800 flex justify-center items-center p-2">
          <h1 className="text-xl">My First Board</h1>
        </header>
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
          {/* <List>
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
          </List> */}
        </div>
      </Layout>
    </>
  );
}

export default App;
