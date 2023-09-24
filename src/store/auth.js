import { createEvent, createStore } from "effector";

export const login = createEvent();

export const $token = createStore(null)
  .on(login, (state, payload) => payload.token);
