import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import { CardsSection } from "./components/CardsSection/CardsSection";
import { FiltersProvider } from "./components/Filters/FiltersProvider";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";

import styles from "./App.module.scss";
import { useFetchCards } from "./components/CardsSection/hooks/useCards";

function App() {
  const { cards, setCards } = useFetchCards();
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.root}>
        <Header />
        <FiltersProvider>
          <section className={styles.content}>
            <Filters cards={cards} />
            <CardsSection
              cards={cards}
              setCards={setCards}
              isLoading={cards.length === 0}
            />
          </section>
        </FiltersProvider>
      </div>
    </DndProvider>
  );
}

export default App;
