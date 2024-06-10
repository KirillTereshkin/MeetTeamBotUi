import { ComponentProps } from "react";

import { Autocomplete } from "@mui/material";

import { TextFieldStyled } from "../TextFieldStyled";

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
    multiple
    renderInput={(params) => (
      <TextFieldStyled {...params} variant="standard" label={textFieldLabel} />
    )}
  />
);

export default AutocompleteStyled;
