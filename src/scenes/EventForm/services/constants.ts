import { Event, Periodicity } from "../../../services/model/event";

export const toggleButtonOptions = [
  { value: Periodicity.once, children: "Единожды" },
  { value: Periodicity.weekly, children: "Раз в неделю" },
  { value: Periodicity.monthly, children: "Раз в месяц" },
  { value: Periodicity.daily, children: "Каждый рабочий день" },
];

export const createEventFormText = {
  header: "Создать событие",
  button: "Создать событие",
};

export const editEventFormText = {
  header: "Редактировать событие",
  button: "Сохранить изменения",
};

export const initialEventData: Partial<Event> = {
  title: "",
  link: "",
  participants: [],
};
