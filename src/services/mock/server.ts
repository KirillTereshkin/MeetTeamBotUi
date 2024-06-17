import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { mockEvents, mockUsers } from "./data";
import { API_URL } from "../store/queries";

export const handlers = [
  http.get(`${API_URL}users`, () => HttpResponse.json(mockUsers)),

  http.get(`${API_URL}event`, () => HttpResponse.json(mockEvents)),

  http.post(`${API_URL}event`, () => HttpResponse.json()),

  http.put(`${API_URL}event`, () => HttpResponse.json()),

  http.delete(`${API_URL}event/:id`, () => HttpResponse.json()),
];

const worker = setupWorker(...handlers);

export const enableMocking = async () => {
  if (process.env.NODE_ENV === "development") {
    return worker.start();
  }
};
