import * as yup from "yup";
import { createRequiredErrorMsg } from "./helpers";
import { FieldsNames } from "./constants";

export const validationSchema = yup.object({
  title: yup.string().required(createRequiredErrorMsg(FieldsNames.title)),
  link: yup.string().required(createRequiredErrorMsg(FieldsNames.link)),
  participants: yup.array().test("", "", (...val) => {
    console.log(...val);

    return true;
  }),
  date: yup.date().test("", "", (...val) => {
    console.log(...val);

    return true;
  }),
  //   start: yup.string().required(),
  //   end: yup.string().required(),
});
