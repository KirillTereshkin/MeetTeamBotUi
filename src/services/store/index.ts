import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import events from "./events";
import { queries } from "./queries";

export const store = configureStore({
  reducer: {
    events,
    [queries.reducerPath]: queries.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queries.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
