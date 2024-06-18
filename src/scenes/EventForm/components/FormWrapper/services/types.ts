import moment from "moment";
import { Periodicity } from "../../../../../services/model/event";
import { User } from "../../../../../services/model/user";

export type EventFormType = {
  title: string;
  link: string;
  participants: User[];
  periodicity: Periodicity;
  date: moment.Moment;
  start: moment.Moment;
  end: moment.Moment;
  description?: string;
};
