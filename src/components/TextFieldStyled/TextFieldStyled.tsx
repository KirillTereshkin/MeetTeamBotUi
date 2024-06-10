import { ComponentProps, FC } from "react";
import cn from "classnames";

import { TextField } from "@mui/material";

import styles from "./TextFieldStyled.module.scss";

interface TextFieldStyledProps extends ComponentProps<typeof TextField> {}

const TextFieldStyled: FC<TextFieldStyledProps> = (
  props: TextFieldStyledProps
) => <TextField {...props} className={cn(styles.textField, props.className)} />;

export default TextFieldStyled;
