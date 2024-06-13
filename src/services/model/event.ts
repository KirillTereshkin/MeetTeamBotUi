export enum Periodicity {
  once = "once",
  weekly = "weekly",
  monthly = "monthly",
  daily = "daily",
}

export interface Event {
  id?: string;
  title: string;
  link: string;
  participants: string[];
  date: string;
  start: string;
  end: string;
  periodicity?: Periodicity;
  description?: string;
}
