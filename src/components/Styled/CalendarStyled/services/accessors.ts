import { Event } from "../../../../services/model/event";

export const accessors = {
  startAccessor: (event: unknown) => new Date((event as Event).start),
  endAccessor: (event: unknown) => new Date((event as Event).end),
};
