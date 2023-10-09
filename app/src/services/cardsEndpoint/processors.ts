import { Card, RawCard } from "./interfaces";

export const processRawCards = (rawCards: RawCard[]): Card[] => {
  return rawCards.map((rawCard) => ({
    ...rawCard,
    createdDate: rawCard.created_date,
    patientName: rawCard.patient_name,
  }));
};
