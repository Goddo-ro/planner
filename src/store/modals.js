import { createEvent, createStore } from "effector";


export const openEmail = createEvent();
export const closeEmail = createEvent();
export const isEmailShow = createStore(true)
  .on(openEmail, () => true)
  .on(closeEmail, () => false);

export const openLogin = createEvent();
export const closeLogin = createEvent();
export const isLoginShow = createStore(false)
  .on(openLogin, () => true)
  .on(closeLogin, () => false);
