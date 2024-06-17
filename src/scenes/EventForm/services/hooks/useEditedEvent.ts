import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetEventsQuery } from "../../../../services/store/queries";

export const useEditedEvent = () => {
  const [searchParams] = useSearchParams();

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

  return { editedEvent, isEdit };
};
