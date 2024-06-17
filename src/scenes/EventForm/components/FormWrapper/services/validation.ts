import * as yup from "yup";
import { invalidFormatErrorMsg, requiredErrorMsg } from "./constants";

export const validationSchema = yup.object({
  title: yup.string().required(requiredErrorMsg),
  link: yup.string().required(requiredErrorMsg),
  participants: yup.array().test("", "", (...val) => {
    // console.log(...val);

    return true;
  }),
  date: yup.date().required(requiredErrorMsg).typeError(invalidFormatErrorMsg),
  start: yup.date().required(requiredErrorMsg).typeError(invalidFormatErrorMsg),
  end: yup.date().required(requiredErrorMsg).typeError(invalidFormatErrorMsg),
});
