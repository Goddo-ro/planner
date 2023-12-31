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

export const joinEvent = async (jwt, eventId) => {
  return await $api.post(`/events/${eventId}/join`, {}, {
    headers: {
      "Authorization": `Bearer ${jwt}`
    }
  })
}

export const leaveEvent = async (jwt, eventId) => {
  return await $api.post(`/events/${eventId}/leave`, {}, {
    headers: {
      "Authorization": `Bearer ${jwt}`
    }
  })
}

export const createEvent = async (jwt, eventData) => {
  return await $api.post(`events`, eventData, {
    headers: {
      "Authorization": `Bearer ${jwt}`,
      "Content-Type": "application/json",
    }
  })
}
