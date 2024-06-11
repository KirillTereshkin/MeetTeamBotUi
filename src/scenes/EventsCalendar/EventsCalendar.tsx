import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Views } from "react-big-calendar";

import { TG } from "../../services/constants";
import { AppScenesPaths } from "../../services/model";

import styles from "./EventsCalendar.module.scss";
import { useMainButton } from "../../services/hooks/useMainButton";
import { CalendarStyled } from "../../components/CalendarStyled";

const events = [
  {
    start: "2024-06-20",
    end: "2024-06-02",
    eventClasses: "optionalEvent",
    title: "test event",
    description: "This is a test description of an event",
  },
  {
    start: "2024-07-19",
    end: "2024-07-25",
    title: "test event",
    description: "This is a test description of an event",
    data: "you can add what ever random data you may want to use later",
  },
];

const EventsCalendar: FC = () => {
  const navigate = useNavigate();

  const onCreateNewEvent = useCallback(() => {
    navigate({ pathname: AppScenesPaths.creteEvent });
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
      />

      <FakeMainButton />
    </>
  );
};

export default EventsCalendar;
