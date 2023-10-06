import { $api } from "../api/api.js";

export const getEvents = async (jwt) => {
  const config = {
    headers: {}
  };

  if (jwt) {
    config.headers['Authorization'] = `Bearer ${jwt}`;
  }
  return await $api.get("/events?populate=*", config);
}
