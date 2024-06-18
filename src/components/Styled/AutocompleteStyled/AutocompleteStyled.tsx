import { ComponentProps } from "react";
import cn from "classnames";
import { Autocomplete } from "@mui/material";

import { TextFieldStyled } from "../TextFieldStyled";
import { TextFieldStyledProps } from "../TextFieldStyled/TextFieldStyled";

import styles from "./AutocompleteStyled.module.scss";

interface AutocompleteStyledProps<T>
  extends Omit<ComponentProps<typeof Autocomplete<T, true>>, "renderInput"> {
  textFieldLabel: string;
  outerAutocompleteParams?: TextFieldStyledProps;
}

const AutocompleteStyled = <T,>({
  textFieldLabel,
  outerAutocompleteParams,
  ...props
}: AutocompleteStyledProps<T>) => (
  <Autocomplete
    {...props}
    className={cn(styles.autocomplete, props.className)}
    multiple
    renderInput={(params) => (
      <TextFieldStyled
        {...params}
        {...outerAutocompleteParams}
        variant="standard"
        label={textFieldLabel}
      />
    )}
  />
);

export default AutocompleteStyled;
