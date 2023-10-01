import { $api } from "../api/api.js";

export const checkEmail = async (email) => {
  return await $api.get(`/taken-emails/${email}`);
};

export const login = async (email, password) => {
  return await $api.post('/auth/local', {
    identifier: email,
    password: password,
  });
};
