import { ComponentProps } from "react";
import cn from "classnames";
import { Autocomplete } from "@mui/material";

import { TextFieldStyled } from "../TextFieldStyled";

import styles from "./AutocompleteStyled.module.scss";

interface AutocompleteStyledProps<T>
  extends Omit<ComponentProps<typeof Autocomplete<T, true>>, "renderInput"> {
  textFieldLabel: string;
}

const AutocompleteStyled = <T,>({
  textFieldLabel,
  ...props
}: AutocompleteStyledProps<T>) => (
  <Autocomplete
    {...props}
    className={cn(styles.autocomplete, props.className)}
    multiple
    renderInput={(params) => (
      <TextFieldStyled {...params} variant="standard" label={textFieldLabel} />
    )}
  />
);

export default AutocompleteStyled;
