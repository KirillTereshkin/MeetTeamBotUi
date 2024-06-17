import { FC, useCallback } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Event as CalendarEvent } from "react-big-calendar";

import { Event } from "../../services/model/event";
import { AppScenesPaths } from "../../services/model/utils";
import { CalendarStyled } from "../../components/Styled/CalendarStyled";
import { useGetEventsQuery } from "../../services/store/queries";
import { useMainButton } from "../../services/hooks/useMainButton";

const EventsCalendar: FC = () => {
  const navigate = useNavigate();

  const { data: events } = useGetEventsQuery();

  const onSelectEvent = (e: CalendarEvent) => {
    const event = e as unknown as Event;
    if (!event.id) {
      return;
    }

    navigate({
      pathname: AppScenesPaths.eventForm,
      search: createSearchParams({
        id: event.id,
      }).toString(),
    });
  };

  const onCreateNewEvent = useCallback(() => {
    navigate({ pathname: AppScenesPaths.eventForm });
  }, [navigate]);

  const { FakeMainButton } = useMainButton({
    text: "Добавить событие",
    cb: onCreateNewEvent,
  });

  return (
    <>
      <CalendarStyled events={events} onSelectEvent={onSelectEvent} />

      <FakeMainButton />
    </>
  );
};

export default EventsCalendar;
