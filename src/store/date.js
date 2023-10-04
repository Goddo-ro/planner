import { createEvent, createStore } from "effector";

export const decreaseMonth = createEvent();
export const increaseMonth = createEvent();
export const setDate = createEvent();
export const $curDate = createStore(new Date())
  .on(increaseMonth, state => {
    const newDate = new Date(state);
    newDate.setMonth(newDate.getMonth() + 1);
    return newDate;
  })
  .on(decreaseMonth, state => {
    const newDate = new Date(state);
    newDate.setMonth(newDate.getMonth() - 1);
    return newDate;
  })
  .on(setDate, (_, date) => date)
