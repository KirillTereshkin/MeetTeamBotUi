import { createBrowserRouter } from "react-router-dom";
import { EventsCalendar } from "../scenes/EventsCalendar";
import { AppScenesPaths } from "./model";
import { CreateEvent } from "../scenes/CreateEvent";

export const TG = window.Telegram.WebApp;

export const router = createBrowserRouter([
  {
    path: AppScenesPaths.eventCalendar,
    element: <EventsCalendar />,
  },
  {
    path: AppScenesPaths.creteEvent,
    element: <CreateEvent />,
  },
]);
