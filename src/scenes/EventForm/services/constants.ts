export const toggleButtonOptions = [
  { value: "once", children: "Единожды" },
  { value: "weekly", children: "Раз в неделю" },
  { value: "monthly", children: "Раз в месяц" },
  { value: "daily", children: "Каждый рабочий день" },
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
    id: 1,
    name: "Кирилл",
    tg: "@Kirill",
  },

  {
    id: 2,
    name: "Андрей",
    tg: "@Andrey",
  },

  {
    id: 3,
    name: "Антон",
    tg: "@Anton",
  },

  {
    id: 4,
    name: "Валера",
    tg: "@Valera",
  },

  {
    id: 5,
    name: "Вика",
    tg: "@Vika",
  },

  {
    id: 6,
    name: "Kolya",
    tg: "@Kolya",
  },
];
