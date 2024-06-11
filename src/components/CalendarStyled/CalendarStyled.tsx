import { FC, ComponentProps } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { formats } from "./services/formats";

import "./CalendarStyled.scss";

const localizer = momentLocalizer(moment);

interface CalendarStyledProps
  extends Omit<ComponentProps<typeof Calendar>, "formats" | "localizer"> {}

const CalendarStyled: FC<CalendarStyledProps> = (
  props: CalendarStyledProps
) => <Calendar {...props} localizer={localizer} formats={formats} />;

export default CalendarStyled;

// const a = {
//   accent_text_color: "#6ab2f2",
//   bg_color: "#17212b",
//   button_color: "#5288c1",
//   button_text_color: "#ffffff",
//   destructive_text_color: "#ec3942",
//   header_bg_color: "#17212b",
//   hint_color: "#708499",
//   link_color: "#6ab3f3",
//   secondary_bg_color: "#232e3c",
//   section_bg_color: "#17212b",
//   section_header_text_color: "#6ab3f3",
//   subtitle_text_color: "#708499",
//   text_color: "#f5f5f5",
// };
