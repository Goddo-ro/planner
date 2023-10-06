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

export const register = async (username, email, password) => {
  return await $api.post('/auth/local/register', {
    username: username,
    email: email,
    password: password,
  })
}

export const getMe = async (token) => {
  return await $api.get('/users/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}
