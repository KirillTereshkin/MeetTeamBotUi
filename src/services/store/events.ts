import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Event } from "../model/event";

export interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [
    {
      id: "1",
      title: "Dick",
      link: "link",
      participants: ["@Anton"],
      date: "2024-06-14",
      start: "14:10",
      end: "15:30",
    } as Event,
  ],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },

    updateEvent: (state, action: PayloadAction<Event>) => {
      const idx = state.events.findIndex((itm) => itm.id === action.payload.id);
      if (idx === -1) {
        return;
      }
      state.events[idx] = action.payload;
    },

    addEvents: (state, action: PayloadAction<Event[]>) => {
      state.events.push(...action.payload);
    },
  },
});

export const { addEvents, addEvent, updateEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
