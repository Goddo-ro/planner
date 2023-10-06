import { createEvent, createStore } from "effector";


export const openEmail = createEvent();
export const closeEmail = createEvent();
export const $isEmailShow = createStore(false)
  .on(openEmail, () => true)
  .on(closeEmail, () => false);

export const openLogin = createEvent();
export const closeLogin = createEvent();
export const $isLoginShow = createStore(false)
  .on(openLogin, () => true)
  .on(closeLogin, () => false);

export const openReg = createEvent();
export const closeReg = createEvent();
export const $isRegShow = createStore(false)
  .on(openReg, () => true)
  .on(closeReg, () => false);

export const openError = createEvent();
export const closeError = createEvent();
export const $isErrorShow = createStore(true)
  .on(openError, () => true)
  .on(closeError, () => false);