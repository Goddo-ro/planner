import { useFormik } from "formik";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import Form from "../UI/Form/Form.jsx";
import Input from "../UI/Input/Input.jsx";
import { closeNewEvent, openError, openNewCongrats } from "../../store/modals.js";
import DateInput from "../UI/DateInput/DateInput.jsx";
import Textarea from "../Textarea/Textarea.jsx";
import "./NewEventModal.scss";
import Button from "../UI/Button/Button.jsx";
import { useStore } from "effector-react";
import { $token, $user } from "../../store/auth.js";
import { useFetching } from "../../hooks/useFetching.js";
import { createEvent } from "../../services/eventService.js";
import { updateTime } from "../../utils/dateUtils.js";
import { useState } from "react";
import ConfirmDialog from "../UI/ConfirmDialog/ConfirmDialog.jsx";

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Обязательное поле"
  }

  if (!values.dateStart) {
    errors.dateStart = "Обязательное поле";
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
    },
    validate,
    onSubmit: values => {
      const eventData = {...values};
      eventData.participants = [user?.id];
      eventData.dateStart = updateTime(eventData.dateStart, eventData.time);

      createEventFetch(token, eventData);
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
        <Textarea className="left"/>
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
        <Input
          className="left"
        />
        <Creator user={user} />
      </Form>
      <Button onClick={formik.handleSubmit} disabled={Object.keys(formik.errors).length}>Создать</Button>
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
