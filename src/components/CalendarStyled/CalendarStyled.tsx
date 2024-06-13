import { FC, ComponentProps } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { formats } from "./services/formats";
import { messages } from "./services/constants";

import "./CalendarStyled.scss";

const localizer = momentLocalizer(moment);

interface CalendarStyledProps
  extends Omit<
    ComponentProps<typeof Calendar>,
    "formats" | "localizer" | "messages"
  > {}

const CalendarStyled: FC<CalendarStyledProps> = (
  props: CalendarStyledProps
) => (
  <Calendar
    {...props}
    messages={messages}
    localizer={localizer}
    formats={formats}
  />
);

export default CalendarStyled;
