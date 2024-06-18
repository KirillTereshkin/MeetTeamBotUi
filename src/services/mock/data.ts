import { User } from "../model/user";
import { Event, Periodicity } from "../model/event";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Кирилл",
    link: "@Kirill",
  },

  {
    id: 2,
    name: "Андрей",
    link: "@Andrey",
  },

  {
    id: 3,
    name: "Антон",
    link: "@Anton",
  },

  {
    id: 4,
    name: "Валера",
    link: "@Valera",
  },

  {
    id: 5,
    name: "Вика",
    link: "@Vika",
  },

  {
    id: 6,
    name: "Коля",
    link: "@Kolya",
  },
];

const getTodayDay = () => new Date().getDate();

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "New Event 1",
    link: "link",
    participants: [1, 2, 3],
    periodicity: Periodicity.once,
    start: `2024-06-${getTodayDay()}T11:10:00.000Z`,
    end: `2024-06-${getTodayDay()}T12:30:00.000Z`,
  },

  {
    id: "2",
    title: "New Event 2",
    link: "link",
    participants: [1, 2, 3],
    periodicity: Periodicity.once,
    start: `2024-06-${getTodayDay()}T14:00:00.000Z`,
    end: `2024-06-${getTodayDay()}T15:30:00.000Z`,
  },
];
