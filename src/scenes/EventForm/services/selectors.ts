import { AppState } from "../../../services/store";

export const eventByIdSelector = (state: AppState, id?: string) =>
  state.events.events.find((item) => item.id === id);
