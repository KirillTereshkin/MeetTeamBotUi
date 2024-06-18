import { withFormik } from "formik";
import { initialEventData } from "./services/constants";
import { validationSchema } from "./services/validation";

const formWrapper = withFormik({
  validationSchema,

  mapPropsToValues: () => initialEventData,

  handleSubmit: () => {},

  validateOnMount: true,

  displayName: "EventFormWrapper",
});

export default formWrapper;
