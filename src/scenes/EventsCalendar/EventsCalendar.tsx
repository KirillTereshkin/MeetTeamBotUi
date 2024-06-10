import { FC, useCallback, useEffect, useMemo } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";

import { TG } from "../../services/constants";
import { AppScenesPaths } from "../../services/model";

import styles from "./EventsCalendar.module.scss";
import { Button } from "@mui/material";

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

const localizer = momentLocalizer(moment);

const EventsCalendar: FC = () => {
  const navigate = useNavigate();

  const onCreateEvent = useCallback(() => {
    navigate({ pathname: AppScenesPaths.creteEvent });
  }, [navigate]);

  useEffect(() => {
    TG.MainButton.text = "Добавить событие";
    TG.MainButton.onClick(onCreateEvent);
    TG.MainButton.show();
  }, [onCreateEvent]);

  return (
    <>
      <Button onClick={onCreateEvent}>FAKE Добавить событие</Button>

      <Calendar
        defaultView={Views.DAY}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        formats={{
          dateFormat: (...val) => {
            console.log(val);
            return "dd";
          },

          dayFormat: (val) => {
            console.log(val);
            return val.toLocaleDateString("ru-RU");
          },
        }}
      />
    </>
  );
};

export default EventsCalendar;
