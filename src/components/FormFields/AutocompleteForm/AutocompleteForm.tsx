import { ComponentProps, FC } from "react";
import { useField } from "formik";

import { AutocompleteStyled } from "../../Styled";

interface AutocompleteFormProps<T>
  extends ComponentProps<typeof AutocompleteStyled<T>> {
  name: string;
}

const AutocompleteForm = <T,>(props: AutocompleteFormProps<T>) => {
  const [field, meta, helpers] = useField(props.name);

  const onChangeHandler: typeof props.onChange = (...args) => {
    props.onChange?.(...args);

    helpers.setValue(args[1]);
  };

  const onBlurHandler: typeof props.onBlur = (...args) => {
    props.onBlur?.(...args);

    helpers.setTouched(true);
  };

  return (
    <AutocompleteStyled
      {...props}
      value={field.value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      outerAutocompleteParams={{
        error: meta.touched && Boolean(meta.error),
        helperText: meta.touched && meta.error,
      }}
    />
  );
};

export default AutocompleteForm;
