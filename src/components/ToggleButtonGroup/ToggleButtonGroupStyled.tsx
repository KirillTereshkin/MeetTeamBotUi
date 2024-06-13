import { ComponentProps, ReactNode } from "react";
import cn from "classnames";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

import styles from "./ToggleButtonGroupStyled.module.scss";

interface ToggleButtonGroupStyledProps<T>
  extends ComponentProps<typeof ToggleButtonGroup> {
  options: Array<{ value: T; children: ReactNode }>;
}

const ToggleButtonGroupStyled = <T extends string | number>({
  options,
  ...ost
}: ToggleButtonGroupStyledProps<T>) => (
  <ToggleButtonGroup
    {...ost}
    className={cn(styles.toggleButtonGroup, ost.className)}
    size="small"
  >
    {options.map((item) => (
      <ToggleButton {...item} key={item.value} />
    ))}
  </ToggleButtonGroup>
);

export default ToggleButtonGroupStyled;
