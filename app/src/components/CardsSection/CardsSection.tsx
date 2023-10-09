import { type FC, useContext } from "react";

import styles from "./CardsSection.module.scss";
import { Section } from "./components/Section/Section";
import {
  Card as CardInterface,
  CardStatus,
} from "../../services/cardsEndpoint/interfaces";
import { FiltersContext } from "../Filters/FiltersProvider";

interface Props {
  className?: string;
  cards: CardInterface[];
  isLoading: boolean;

  setCards: React.Dispatch<React.SetStateAction<CardInterface[]>>;
}

export const CardsSection: FC<Props> = ({
  className,
  cards,
  setCards,
  isLoading,
}) => {
  const { activeArrhythmias, activePatientName } = useContext(FiltersContext);
  let filteredCards = cards;
  if (activeArrhythmias.length > 0 || activePatientName.length > 0)
    filteredCards = cards.filter(
      (card) =>
        card.arrhythmias.some((arrhythmia) =>
          activeArrhythmias.includes(arrhythmia)
        ) || activePatientName.includes(card.patientName)
    );

  const onCardsDrop = (item: any, sectionName: CardStatus) => {
    setCards((cards) => {
      const cardIndex = cards.findIndex((card) => card.id === item.id);
      if (cardIndex !== -1) {
        cards[cardIndex].status = sectionName;
      }
      return [...cards];
    });
  };

  const pendingCards = filteredCards.filter(
    (card) => card.status === "PENDING"
  );
  const doneCards = filteredCards.filter((card) => card.status === "DONE");
  const rejectedCards = filteredCards.filter(
    (card) => card.status === "REJECTED"
  );

  return (
    <ul className={styles.root}>
      <Section
        key="first"
        cards={pendingCards}
        onDrop={onCardsDrop}
        sectionName="Pending"
        isLoading={isLoading}
      />
      <Section
        key="second"
        cards={doneCards}
        onDrop={onCardsDrop}
        sectionName="Done"
        isLoading={isLoading}
      />
      <Section
        key="third"
        cards={rejectedCards}
        onDrop={onCardsDrop}
        sectionName="Rejected"
        isLoading={isLoading}
      />
    </ul>
  );
};

CardsSection.displayName = "CardsSection";
