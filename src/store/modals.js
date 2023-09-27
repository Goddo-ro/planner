import { createEvent, createStore } from "effector";


export const openEmail = createEvent();
export const closeEmail = createEvent();
export const isEmailShow = createStore(false)
  .on(openEmail, () => true)
  .on(closeEmail, () => false);
