import axios from "axios";

export const $api = axios.create({
  baseURL: 'https://planner.rdclr.ru',
});
