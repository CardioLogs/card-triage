import { useState, useEffect, useRef } from "react";

import { Card } from "../../../services/cardsEndpoint/interfaces";
import { processRawCards } from "../../../services/cardsEndpoint/processors";

export const useFetchCards = (): {
  cards: Card[];
  err: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
} => {
  const [cards, setCards] = useState<Card[]>([]);
  const [err, setErr] = useState<string>("");
  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(processRawCards(data));
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);
  return { cards, err, setCards };
};
