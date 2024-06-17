import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "../model/user";
import { Event } from "../model/event";

export const API_URL = "http://localhost:8000/";

export const queries = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "users",
    }),

    getEvents: build.query<Event[], void>({
      query: () => "event",
    }),

    createEvent: build.mutation<void, Omit<Event, "id">>({
      query: (body) => ({
        url: "event",
        method: "POST",
        body,
      }),
    }),

    updateEvent: build.mutation<void, Event>({
      query: (body) => ({
        url: "event",
        method: "PUT",
        body,
      }),
    }),

    deleteEvent: build.mutation<void, number | string>({
      query: (id) => ({
        url: `event/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetEventsQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = queries;
