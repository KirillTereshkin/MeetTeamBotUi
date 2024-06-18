import { useCallback } from "react";
import { useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";

import { useEditedEvent } from "./useEditedEvent";
import { TG } from "../../../../services/constants";
import { AppScenesPaths } from "../../../../services/model/utils";
import { editEventFormText, createEventFormText } from "../constants";
import { EventFormType } from "../../components/FormWrapper/services/types";
import { incorrectFormValues } from "../../components/FormWrapper/services/constants";
import { useIsUnknownPlatform } from "../../../../services/hooks/useIsUnknownPlatform";
import { convertFormEventToEvent } from "../../components/FormWrapper/services/helpers";
import {
  useCreateEventMutation,
  useUpdateEventMutation,
} from "../../../../services/store/queries";

export const useEventFormData = () => {
  const navigate = useNavigate();
  const { isUnknownPlatform } = useIsUnknownPlatform();

  const { isEdit } = useEditedEvent();

  const [updateMutation] = useUpdateEventMutation();
  const [createMutation] = useCreateEventMutation();

  const { values, isValid } = useFormikContext<EventFormType>();

  const processEvent = useCallback(() => {
    if (!isValid) {
      if (isUnknownPlatform) {
        window.alert(incorrectFormValues);
        return;
      }

      TG.showPopup({
        title: "Ошибка",
        message: incorrectFormValues,
      });

      return;
    }

    const mutationFn = isEdit ? updateMutation : createMutation;
    mutationFn(convertFormEventToEvent(values));
    navigate(AppScenesPaths.eventCalendar);
  }, [
    createMutation,
    isEdit,
    isUnknownPlatform,
    isValid,
    navigate,
    updateMutation,
    values,
  ]);

  const eventFormText = isEdit ? editEventFormText : createEventFormText;

  return {
    isEdit,
    processEvent,
    eventFormText,
  };
};
