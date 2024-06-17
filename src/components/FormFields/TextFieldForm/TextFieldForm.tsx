/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FocusEvent, ComponentProps, FC } from "react";

import { useField } from "formik";

import { TextFieldStyled } from "../../Styled/TextFieldStyled";

interface TextFieldFormProps extends ComponentProps<typeof TextFieldStyled> {
  name: string;
}

const TextFieldForm: FC<TextFieldFormProps> = (props: TextFieldFormProps) => {
  const [_1, meta, helpers] = useField(props.name);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.onChange?.(e);

    helpers.setValue(e.target.value);
  };

  const onBlurHandler = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.onBlur?.(e);

    helpers.setValue(e.target.value);
    helpers.setTouched(true);
  };

  return (
    <TextFieldStyled
      {...props}
      variant="standard"
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default TextFieldForm;
