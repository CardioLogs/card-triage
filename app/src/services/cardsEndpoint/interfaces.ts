export type CardStatus = "PENDING" | "REJECTED" | "DONE";

export interface RawCard {
  arrhythmias: string[];
  created_date: string;
  id: number;
  patient_name: string;
  status: CardStatus;
}

export interface Card {
  arrhythmias: string[];
  createdDate: string;
  id: number;
  patientName: string;
  status: CardStatus;
}
