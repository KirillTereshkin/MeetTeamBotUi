import { useFormik } from "formik";

import { validationSchema } from "./validation";

export const useValidation = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit: () => {},
  });

  const getTextFieldProps = (name: keyof typeof formik.values) => ({
    name,
    value: formik.values[name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
  });

  return { formik, getTextFieldProps };
};
