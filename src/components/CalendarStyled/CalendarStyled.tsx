import { FC, ComponentProps } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { formats } from "./services/formats";
import { TG } from "../../services/constants";
import { messages } from "./services/constants";
import { accessors } from "./services/accessors";

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
    {...accessors}
    messages={messages}
    localizer={localizer}
    formats={formats}
    defaultView={Views.DAY}
    style={{ height: TG.viewportHeight - 10 }}
  />
);

export default CalendarStyled;
