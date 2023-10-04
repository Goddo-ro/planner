import persist from 'https://esm.sh/effector-localstorage'
import { createEvent, createStore } from "effector";

export const loginEvent = createEvent();
export const logout = createEvent();
export const $token = createStore(null)
  .on(loginEvent, (state, payload) => payload.jwt)
  .on(logout, () => null);
export const $user = createStore(null)
  .on(loginEvent, (state, payload) => payload.user)
  .on(logout, () => null);

// persist({
//   store: $token,
//   key: 'token',
// })
