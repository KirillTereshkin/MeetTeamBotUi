import { ComponentProps, FC } from "react";
import cn from "classnames";

import { DatePicker } from "@mui/x-date-pickers";

import styles from "./DatePickerStyled.module.scss";

interface DatePickerStyledProps extends ComponentProps<typeof DatePicker> {}

const DatePickerStyled: FC<DatePickerStyledProps> = (
  props: DatePickerStyledProps
) => (
  <DatePicker {...props} className={cn(styles.datePicker, props.className)} />
);

export default DatePickerStyled;
