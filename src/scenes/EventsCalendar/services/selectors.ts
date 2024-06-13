import moment from "moment";
import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../services/store";

export const eventsSelector = createDraftSafeSelector(
  (state: AppState) => state.events.events,
  (events) =>
    events.map(({ id, date, title, start, end }) => ({
      id,
      title,
      start: moment(`${date} ${start}`, "YYYY-MM-DD HH:mm").toDate(),
      end: moment(`${date} ${end}`, "YYYY-MM-DD HH:mm").toDate(),
    }))
);
