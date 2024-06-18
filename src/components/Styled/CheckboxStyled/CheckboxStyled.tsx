import { FC } from "react";
import cn from "classnames";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControlLabelProps,
} from "@mui/material";

import styles from "./CheckboxStyled.module.scss";

interface CheckboxStyledProps extends Omit<FormControlLabelProps, "control"> {}

const CheckboxStyled: FC<CheckboxStyledProps> = (props) => (
  <FormGroup>
    <FormControlLabel
      {...props}
      className={cn(styles.checkbox, props.className)}
      control={<Checkbox defaultChecked />}
    />
  </FormGroup>
);

export default CheckboxStyled;
