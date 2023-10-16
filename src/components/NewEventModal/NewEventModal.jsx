import { useState } from "react";
import { useFormik } from "formik";
import { useStore } from "effector-react";
import { closeNewEvent, openError, openNewCongrats } from "../../store/modals.js";
import { $token, $user } from "../../store/auth.js";
import { useFetching } from "../../hooks/useFetching.js";
import { createEvent } from "../../services/eventService.js";
import { uploadImages } from "../../services/fileService.js";
import { updateTime } from "../../utils/dateUtils.js";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import Form from "../UI/Form/Form.jsx";
import Input from "../UI/Input/Input.jsx";
import ConfirmDialog from "../UI/ConfirmDialog/ConfirmDialog.jsx";
import Button from "../UI/Button/Button.jsx";
import DateInput from "../UI/DateInput/DateInput.jsx";
import Textarea from "../UI/Textarea/Textarea.jsx";
import UsersInput from "../UI/UsersInput/UsersInput.jsx";
import ImagesChooser from "../UI/ImagesChooser/ImagesChooser.jsx";
import NewEventImages from "../NewEventImages/NewEventImages.jsx";
import "./NewEventModal.scss";

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Обязательное поле"
  }

  if (!values.dateStart) {
    errors.dateStart = "Обязательное поле";
  }

  if (!values.description) {
    errors.description = "Обязательное поле";
  }

  if (!values.time) {
    errors.time = "Обязательное поле"
  }

  if (!values.location) {
    errors.location = "Обязательное поле"
  }

  return errors;
}

const NewEventModal = () => {
  const [isConfirmShow, setIsConfirmShow] = useState(false);

  const user = useStore($user);
  const token = useStore($token);

  const [createEventFetch] = useFetching(async (jwt, eventData) => {
    try {
      await createEvent(jwt, eventData);
      closeNewEvent();
      openNewCongrats({...eventData, start: eventData.dateStart});
    } catch (e) {
      closeNewEvent();
      openError();
    }
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      dateStart: null,
      dateEnd: null,
      description: '',
      time: '',
      location: '',
      participants: [],
      photos: [],
    },
    validate,
    onSubmit: values => {
      uploadImages(values.photos, token)
        .then(res => {
          const eventData = {...values};
          eventData.participants = [user?.id, ...eventData.participants.map(user => user.id)];
          eventData.dateStart = updateTime(eventData.dateStart, eventData.time);
          eventData.photos = res?.data?.map(photo => photo.id);

          createEventFetch(token, eventData);
        })
        .catch(() => {
          closeNewEvent();
          openError();
        })
    }
  });

  return (
    <>
      <ModalWindow className="new-event" onClose={() => setIsConfirmShow(true)}>
      <h3 className="h2 new-event__title">Создание события</h3>
      <Form className="new-event__form" onSubmit={formik.handleSubmit}>
        <Input
          name="title"
          isRequired
          className="left"
          placeholder="Название"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.errors.title}
        />
        <div className="new-event__date-container right">
          <DateInput placeholder={"Начало"}
                     value={formik.values.dateStart}
                     onChange={(e) => formik.handleChange({target: {name: "dateStart", value: e}})}
          />
          <DateInput placeholder={"Конец"}
                     value={formik.values.dateEnd}
                     onChange={(e) => formik.handleChange({target: {name: "dateEnd", value: e}})}
          />
        </div>
        <Textarea
          className="left description"
          placeholder="Описание"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
          isRequired
        />
        <Input
          type="time"
          isRequired
          placeholder="Время"
          name="time"
          className="right"
          value={formik.values.time}
          onChange={formik.handleChange}
          error={formik.errors.time}
        />
        <Input
          isRequired
          placeholder="Место проведения"
          name="location"
          className="right"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.errors.location}
        />
        <UsersInput
          className="left"
          name="participants"
          placeholder="Участники"
          value={formik.values.participants}
          onChange={formik.handleChange}
        />
        <Creator user={user} />
        <ImagesChooser
          className="left"
          name="photos"
          value={formik.values.photos}
          onChange={formik.handleChange}
        />
        <NewEventImages
          className="right"
          name="photos"
          value={formik.values.photos}
          onChange={formik.handleChange}
        />
      </Form>
      <Button
        onClick={formik.handleSubmit}
        disabled={Object.keys(formik.errors).length}
      >Создать</Button>
    </ModalWindow>
      {
        isConfirmShow &&
        <ConfirmDialog
          body="Передумали создавать событие?"
          onClose={() => setIsConfirmShow(false)}
          onConfirm={closeNewEvent}
        />
      }
    </>
  )
}

const Creator = ({user}) => {
  return (
    <div className="right creator">
      <div className="user-icon-container"/>
      <div>
        <p>{user?.username}</p>
        <span className="creator-span">Организатор</span>
      </div>
    </div>
  )
}

export default NewEventModal;
