import { Card } from "./components/Card";
import { cardTemplates } from "@/data/cardTemplates";
import { type priorityType } from "@/types";
import "./App.css";
import { List } from "@/components/List";

function App() {
  return (
    <>
      <List>
        {cardTemplates.map((cardTemplate) => {
          return (
            <Card
              key={cardTemplate.cardId}
              title={cardTemplate.title}
              description={cardTemplate.description}
              priority={(cardTemplate.priority as priorityType) || "low"}
            />
          );
        })}
      </List>
    </>
  );
}

export default App;
