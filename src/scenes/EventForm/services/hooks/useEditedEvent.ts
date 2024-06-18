import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useFormikContext } from "formik";

import {
  useGetEventsQuery,
  useGetUsersQuery,
} from "../../../../services/store/queries";
import { convertEventToFormEvent } from "../../components/FormWrapper/services/helpets";

export const useEditedEvent = () => {
  const { data: users } = useGetUsersQuery();
  const [searchParams] = useSearchParams();

  const { setValues } = useFormikContext();

  const editId = useMemo(() => searchParams.get("id")?.[0], [searchParams]);

  const { data } = useGetEventsQuery();

  const editedEvent = useMemo(() => {
    if (!data || !editId) {
      return null;
    }

    return data.find((item) => item.id === editId) || null;
  }, [data, editId]);

  const isEdit = useMemo(
    () => Boolean(searchParams.get("id")?.length),
    [searchParams]
  );

  useEffect(() => {
    if (editedEvent) {
      setValues(convertEventToFormEvent(editedEvent, users));
    }
  }, [editedEvent, setValues, users]);

  return { editedEvent, isEdit };
};
