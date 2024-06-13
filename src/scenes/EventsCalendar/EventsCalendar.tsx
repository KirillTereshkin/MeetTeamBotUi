import { FC, useCallback } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Event, Views } from "react-big-calendar";

import { TG } from "../../services/constants";
import { AppScenesPaths } from "../../services/model/utils";
import { CalendarStyled } from "../../components/CalendarStyled";
import { useMainButton } from "../../services/hooks/useMainButton";

import { useSelector } from "react-redux";
import { eventsSelector } from "./services/selectors";

// const events = [
//   {
//     start: "2024-06-20",
//     end: "2024-06-02",
//     eventClasses: "optionalEvent",
//     title: "test event",
//     description: "This is a test description of an event",
//   },
//   {
//     start: "2024-07-19",
//     end: "2024-07-25",
//     title: "test event",
//     description: "This is a test description of an event",
//     data: "you can add what ever random data you may want to use later",
//   },
// ];

const EventsCalendar: FC = () => {
  const navigate = useNavigate();

  const events = useSelector(eventsSelector);

  const onSelectEvent = (e: Event) => {
    navigate({
      pathname: AppScenesPaths.eventForm,
      search: createSearchParams({
        id: (e as unknown).id,
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
      <CalendarStyled
        defaultView={Views.DAY}
        events={events}
        style={{ height: TG.viewportHeight - 10 }}
        onSelectEvent={onSelectEvent}
      />

      <FakeMainButton />
    </>
  );
};

export default EventsCalendar;
