import { Event } from "../../../../../services/model/event";

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

export const requiredErrorMsg = "Поле обязательно к заполнению";

export const invalidFormatErrorMsg = "Неверный формат";

export const incorrectFormValues =
  "Форма заполнена некорректно, пожалуйста, проверьте данные.";

export const initialEventData: Partial<Event> = {
  title: "",
  link: "",
  participants: [],
};
