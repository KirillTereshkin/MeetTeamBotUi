import { Periodicity } from "../../../../../services/model/event";

export type EventFormType = {
  title: string;
  link: string;
  participants: Array<string | number>;
  periodicity: Periodicity;
  date: string;
  start: string;
  end: string;
  description: string;
};
