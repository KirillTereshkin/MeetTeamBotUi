import { Formats } from "react-big-calendar";

export const formats: Formats = {
  dateFormat: (val) =>
    val.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }),

  timeGutterFormat: (val) =>
    new Date(val).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),

  dayFormat: (val) =>
    val.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
    }),

  weekdayFormat: (val) =>
    new Date(val).toLocaleDateString("ru-RU", { weekday: "long" }),

  dayHeaderFormat: (val) => {
    const date = new Date(val);

    return `${date.getDate()}, ${date.toLocaleDateString("ru-RU", {
      weekday: "long",
    })}`;
  },

  monthHeaderFormat: (val) => {
    const date = new Date(val);

    return `${date.toLocaleDateString("ru-RU", {
      month: "long",
    })}, ${date.getFullYear()}`;
  },

  dayRangeHeaderFormat: (val) => {
    const date1 = new Date(val.start);
    const date2 = new Date(val.end);

    const dateStr1 = `${date1.getDate()} ${date1.toLocaleDateString("ru-RU", {
      month: "long",
    })}`;

    const dateStr2 = `${date2.getDate()} ${date2.toLocaleDateString("ru-RU", {
      month: "long",
    })}`;

    return `${dateStr1} - ${dateStr2}`;
  },
};
