import { createEvent, createStore } from "effector";


export const openEmail = createEvent();
export const closeEmail = createEvent();
export const isEmailShow = createStore(true)
  .on(openEmail, () => true)
  .on(closeEmail, () => false);
