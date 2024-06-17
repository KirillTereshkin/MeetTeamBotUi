import { useState, useCallback, useEffect } from "react";

import { useEditedEvent } from "./useEditedEvent";
import { Event } from "../../../../services/model/event";
import {
  useCreateEventMutation,
  useUpdateEventMutation,
} from "../../../../services/store/queries";
import {
  initialEventData,
  editEventFormText,
  createEventFormText,
} from "../constants";

export const useEventFormData = () => {
  const { editedEvent, isEdit } = useEditedEvent();

  const [updateMutation] = useUpdateEventMutation();
  const [createMutation] = useCreateEventMutation();

  const [eventValue, setEventValue] = useState<Partial<Event>>({
    ...initialEventData,
  });

  const onChangeEvent = (key: keyof Event, val: Event[typeof key]) => {
    setEventValue((prev) => ({ ...prev, [key]: val }));
  };

  const processEvent = useCallback(() => {
    if (isEdit) {
      updateMutation(eventValue as Event);
      return;
    }

    createMutation(eventValue as Event);
  }, [createMutation, eventValue, isEdit, updateMutation]);

  const eventFormText = isEdit ? editEventFormText : createEventFormText;

  useEffect(() => {
    if (editedEvent) {
      setEventValue(editedEvent);
    }
  }, [editedEvent]);

  return {
    isEdit,
    eventValue,
    processEvent,
    eventFormText,
    onChangeEvent,
  };
};
