import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";

import { validationSchema } from "./validation";
import {
  createEventFormText,
  editEventFormText,
  initialEventData,
} from "./constants";
import { useSelector } from "react-redux";
import { eventByIdSelector } from "./selectors";
import { AppState, useAppDispatch } from "../../../services/store";
import { Event } from "../../../services/model/event";
import { addEvent, updateEvent } from "../../../services/store/events";

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

export const useEventFormData = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const [eventValue, setEventValue] = useState<Partial<Event>>({
    ...initialEventData,
  });

  const editId = useMemo(() => searchParams.get("id")?.[0], [searchParams]);

  const editedEvent = useSelector((state: AppState) =>
    eventByIdSelector(state, editId)
  );

  const isEdit = useMemo(
    () => Boolean(searchParams.get("id")?.length),
    [searchParams]
  );

  const onChangeEvent = (key: keyof Event, val: Event[typeof key]) => {
    setEventValue((prev) => ({ ...prev, [key]: val }));
  };

  const processEvent = useCallback(() => {
    if (isEdit) {
      dispatch(updateEvent(eventValue as Event));
      return;
    }
    dispatch(addEvent(eventValue as Event));
  }, [dispatch, eventValue, isEdit]);

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
