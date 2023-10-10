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
export const $isErrorShow = createStore(false)
  .on(openError, () => true)
  .on(closeError, () => false);

export const openEvent = createEvent();
export const closeEvent = createEvent();
export const $isEventShow = createStore(true)
  .on(openEvent, () => true)
  .on(closeEvent, () => false);
export const $eventData = createStore({
  "id": 1,
  "start": "2023-09-25T19:15:00.000Z",
  "title": "Фестиваль «Будущее»",
  "description": "Это независимый музыкальный фестиваль талантливых артистов, которые уже собирают крупнейшие залы поклонников по всей России или только начинают свой творческий путь. Главное, что объединяет участников фестиваля — эмоции, которые они передают слушателям, погружая их в особенную атмосферу своего выступления.",
  "location": "г. Москва, Ленинградский проспект, 81",
  "endDate": null,
  "createdAt": "2023-09-27T12:40:52.633Z",
  "updatedAt": "2023-09-27T15:31:29.150Z",
  "photos": [
    {
      "id": 1,
      "name": "g1.png",
      "alternativeText": null,
      "caption": null,
      "width": 267,
      "height": 160,
      "formats": {
        "thumbnail": {
          "ext": ".png",
          "url": "/uploads/thumbnail_g1_bb26dc4eee.png",
          "hash": "thumbnail_g1_bb26dc4eee",
          "mime": "image/png",
          "name": "thumbnail_g1.png",
          "path": null,
          "size": 95.58,
          "width": 245,
          "height": 147
        }
      },
      "hash": "g1_bb26dc4eee",
      "ext": ".png",
      "mime": "image/png",
      "size": 34.06,
      "url": "/uploads/g1_bb26dc4eee.png",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2023-09-27T15:31:25.217Z",
      "updatedAt": "2023-09-27T15:31:25.217Z"
    },
    {
      "id": 2,
      "name": "g3.png",
      "alternativeText": null,
      "caption": null,
      "width": 267,
      "height": 160,
      "formats": {
        "thumbnail": {
          "ext": ".png",
          "url": "/uploads/thumbnail_g3_25d162a923.png",
          "hash": "thumbnail_g3_25d162a923",
          "mime": "image/png",
          "name": "thumbnail_g3.png",
          "path": null,
          "size": 64.95,
          "width": 245,
          "height": 147
        }
      },
      "hash": "g3_25d162a923",
      "ext": ".png",
      "mime": "image/png",
      "size": 15.61,
      "url": "/uploads/g3_25d162a923.png",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2023-09-27T15:31:25.225Z",
      "updatedAt": "2023-09-27T15:31:25.225Z"
    },
    {
      "id": 3,
      "name": "g2.png",
      "alternativeText": null,
      "caption": null,
      "width": 268,
      "height": 160,
      "formats": {
        "thumbnail": {
          "ext": ".png",
          "url": "/uploads/thumbnail_g2_22d926a56a.png",
          "hash": "thumbnail_g2_22d926a56a",
          "mime": "image/png",
          "name": "thumbnail_g2.png",
          "path": null,
          "size": 79.53,
          "width": 245,
          "height": 146
        }
      },
      "hash": "g2_22d926a56a",
      "ext": ".png",
      "mime": "image/png",
      "size": 24.08,
      "url": "/uploads/g2_22d926a56a.png",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2023-09-27T15:31:25.229Z",
      "updatedAt": "2023-09-27T15:31:25.229Z"
    }
  ],
  "participants": [
    {
      "id": 25,
      "username": "Bojack",
      "email": "bojack@mail.ru",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-09T08:09:53.950Z",
      "updatedAt": "2023-10-09T08:09:53.950Z"
    },
    {
      "id": 24,
      "username": "ragnar_lodbrok",
      "email": "ragnar@mail.ru",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-09T06:17:23.455Z",
      "updatedAt": "2023-10-09T10:47:57.399Z"
    },
    {
      "id": 2,
      "username": "Test1",
      "email": "test1@test.ru",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-01T12:20:44.167Z",
      "updatedAt": "2023-10-01T12:20:44.167Z"
    },
    {
      "id": 12,
      "username": "Иван Иванов",
      "email": "ivan@mail.ru",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-05T19:16:35.622Z",
      "updatedAt": "2023-10-05T19:16:35.622Z"
    },
    {
      "id": 10,
      "username": "Шамиль",
      "email": "shamil@mail.ru",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-03T07:28:27.426Z",
      "updatedAt": "2023-10-06T09:52:19.866Z"
    },
    {
      "id": 9,
      "username": "user1",
      "email": "user1email@gmail.com",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-02T19:28:10.682Z",
      "updatedAt": "2023-10-02T19:28:10.682Z"
    },
    {
      "id": 27,
      "username": "Ибрагим",
      "email": "fiit@gmail.com",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-09T22:14:57.258Z",
      "updatedAt": "2023-10-09T22:14:57.258Z"
    },
    {
      "id": 28,
      "username": "Виталий",
      "email": "secval224@gmail.com",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2023-10-10T09:59:30.053Z",
      "updatedAt": "2023-10-10T09:59:30.053Z"
    }
  ]
})
  .on(openEvent, (state, payload) => payload)
  .on(closeEvent, () => null);
