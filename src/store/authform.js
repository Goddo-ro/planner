import { createEvent, createStore } from "effector";

export const setEmail = createEvent();
export const email = createStore("")
  .on(setEmail, (state, payload) => payload);
