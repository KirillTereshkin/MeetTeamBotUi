import { ComponentProps, FC } from "react";
import cn from "classnames";

import { TimePicker } from "@mui/x-date-pickers";

import styles from "./TimePickerStyled.module.scss";

interface TimePickerStyledProps extends ComponentProps<typeof TimePicker> {}

const TimePickerStyled: FC<TimePickerStyledProps> = (props) => (
  <TimePicker {...props} className={cn(styles.timePicker, props.className)} />
);

export default TimePickerStyled;
