import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import events from "./events";

export const store = configureStore({
  reducer: {
    events,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
