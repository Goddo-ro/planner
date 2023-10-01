import { $api } from "../api/api.js";

export const checkEmail = async (email) => {
  return await $api.get(`/taken-emails/${email}`);
}
