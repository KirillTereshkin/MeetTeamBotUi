/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, FC } from "react";
import { useField } from "formik";

import { DatePickerStyled } from "../../Styled";

interface DatePickerFormProps extends ComponentProps<typeof DatePickerStyled> {
  name: string;
}

const DatePickerForm: FC<DatePickerFormProps> = (
  props: DatePickerFormProps
) => {
  const [field, meta, helpers] = useField(props.name);

  const onChangeHandler: typeof props.onChange = (value, context) => {
    props.onChange?.(value, context);

    helpers.setValue(value?.format());
  };

  const onBlurHandler = () => {
    helpers.setTouched(true);
  };

  return (
    <DatePickerStyled
      {...props}
      value={field.value}
      onChange={onChangeHandler}
      slotProps={{
        textField: {
          variant: "standard",
          error: meta.touched && Boolean(meta.error),
          helperText: meta.touched && meta.error,
          onBlur: onBlurHandler,
        },
      }}
    />
  );
};

export default DatePickerForm;
