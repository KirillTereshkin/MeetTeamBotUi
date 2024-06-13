import { FieldsNames, requiredErrorMsg } from "./constants";

export const createRequiredErrorMsg = (val: FieldsNames) =>
  `${val} ${requiredErrorMsg}`;
