/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, FC } from "react";
import { useField } from "formik";

import { TimePickerStyled } from "../../Styled/TimePickerStyled";

interface TimePickerFormProps extends ComponentProps<typeof TimePickerStyled> {
  name: string;
}

const TimePickerForm: FC<TimePickerFormProps> = (props) => {
  const [_1, meta, helpers] = useField(props.name);

  const onChangeHandler: typeof props.onChange = (value, context) => {
    props.onChange?.(value, context);

    helpers.setValue(value?.format());
    if (!meta.touched) {
      helpers.setTouched(true);
    }
  };

  const onBlurHandler = () => {
    helpers.setTouched(true);
  };

  return (
    <TimePickerStyled
      {...props}
      onChange={onChangeHandler}
      slotProps={{
        textField: {
          variant: "standard",
          error: meta.touched && Boolean(meta.error),
          helperText: meta.touched && meta.error,
          onBlur: onBlurHandler,
        },
      }}
      ampm={false}
    />
  );
};

export default TimePickerForm;
