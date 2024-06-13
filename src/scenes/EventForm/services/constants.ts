import { Event, Periodicity } from "../../../services/model/event";

export const toggleButtonOptions = [
  { value: Periodicity.once, children: "Единожды" },
  { value: Periodicity.weekly, children: "Раз в неделю" },
  { value: Periodicity.monthly, children: "Раз в месяц" },
  { value: Periodicity.daily, children: "Каждый рабочий день" },
];

export enum FieldsNames {
  title = "Наименование",
  link = "Ссылка",
  participants = "Участники",
  date = "Дата",
  start = "Начало",
  end = "Конец",
  periodicity = "Периодичность",
  description = "Описание",
}

export const requiredErrorMsg = "не может отсутствовать";

export const users = [
  {
    name: "Кирилл",
    id: "@Kirill",
  },

  {
    name: "Андрей",
    id: "@Andrey",
  },

  {
    name: "Антон",
    id: "@Anton",
  },

  {
    name: "Валера",
    id: "@Valera",
  },

  {
    name: "Вика",
    id: "@Vika",
  },

  {
    name: "Kolya",
    id: "@Kolya",
  },
];

export const usersObject = users.reduce(
  (prev, itm) => ({ ...prev, [itm.id]: itm }),
  {}
);

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
