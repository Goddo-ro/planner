import { createEvent, createStore } from "effector";
import { closeLogin } from "./modals.js";

export const setEmail = createEvent();
export const email = createStore("")
  .on(setEmail, (state, payload) => payload)
  .on(closeLogin, () => "")
