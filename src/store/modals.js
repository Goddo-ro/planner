import { createEvent, createStore } from "effector";

// Email modal
export const openEmail = createEvent();
export const closeEmail = createEvent();
export const $isEmailShow = createStore(false)
  .on(openEmail, () => true)
  .on(closeEmail, () => false);

// Login modal
export const openLogin = createEvent();
export const closeLogin = createEvent();
export const $isLoginShow = createStore(false)
  .on(openLogin, () => true)
  .on(closeLogin, () => false);

// Register modal
export const openReg = createEvent();
export const closeReg = createEvent();
export const $isRegShow = createStore(false)
  .on(openReg, () => true)
  .on(closeReg, () => false);

// Error modal
export const openError = createEvent();
export const closeError = createEvent();
export const $isErrorShow = createStore(false)
  .on(openError, () => true)
  .on(closeError, () => false);

// Event modal and chosen content data
export const openEvent = createEvent();
export const closeEvent = createEvent();
export const $isEventShow = createStore(false)
  .on(openEvent, () => true)
  .on(closeEvent, () => false);
export const $eventData = createStore(null)
  .on(openEvent, (state, payload) => payload)
  .on(closeEvent, () => null);

// Join event congrats modal
export const openJoinCongrats = createEvent();
export const closeJoinCongrats = createEvent();
export const $isJoinCongratsShow = createStore(false)
  .on(openJoinCongrats, () => true)
  .on(closeJoinCongrats, () => false)
export const $joinEventData = createStore(null)
  .on(openJoinCongrats, (state, payload) => payload)
  .on(closeJoinCongrats, () => null);

// New event modal
export const openNewEvent = createEvent();
export const closeNewEvent = createEvent();
export const $isNewEventShow = createStore(false)
  .on(openNewEvent, () => true)
  .on(closeNewEvent, () => false)
