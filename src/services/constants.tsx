import { createBrowserRouter } from "react-router-dom";
import { EventsCalendar } from "../scenes/EventsCalendar";
import { AppScenesPaths } from "./model";
import { EventForm } from "../scenes/EventForm";

export const TG = window.Telegram.WebApp;

export const router = createBrowserRouter([
  {
    path: AppScenesPaths.eventCalendar,
    element: <EventsCalendar />,
  },
  {
    path: AppScenesPaths.eventForm,
    element: <EventForm />,
  },
]);
