import { Periodicity } from "../../../services/model/event";

export type ParticipantType = {
  name: string;
  id: string;
};

export type EventFormType = {
  title: string;
  link: string;
  participants: ParticipantType[];
  periodicity: Periodicity;
  date: string;
  start: string;
  end: string;
  description: string;
};
